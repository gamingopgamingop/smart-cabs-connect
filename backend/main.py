from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from datetime import datetime, timedelta
from typing import List

from database import get_session, create_db_and_tables
from models import User, OTP, generate_otp_code
from auth import create_access_token, mock_send_otp

app = FastAPI(title="Smart Cabs Auth API")

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    try:
        create_db_and_tables()
    except Exception as e:
        print(f"Error creating tables: {e}")

@app.post("/auth/request-otp")
async def request_otp(phone: str, session: Session = Depends(get_session)):
    # 1. Generate OTP
    code = generate_otp_code()
    expires_at = datetime.utcnow() + timedelta(minutes=5)
    
    # 2. Store OTP in DB
    new_otp = OTP(phone=phone, code=code, expires_at=expires_at)
    session.add(new_otp)
    session.commit()
    
    # 3. Send OTP (Mock)
    mock_send_otp(phone, code)
    
    return {"message": "OTP sent successfully", "phone": phone}

@app.post("/auth/verify-otp")
async def verify_otp(phone: str, code: str, session: Session = Depends(get_session)):
    # 1. Check if OTP is valid
    statement = select(OTP).where(OTP.phone == phone, OTP.code == code, OTP.is_used == False)
    otp_record = session.exec(statement).first()
    
    if not otp_record or otp_record.is_expired():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired OTP"
        )
    
    # 2. Mark OTP as used
    otp_record.is_used = True
    session.add(otp_record)
    
    # 3. Get or Create User
    statement = select(User).where(User.phone == phone)
    user = session.exec(statement).first()
    
    if not user:
        user = User(phone=phone)
        session.add(user)
    
    session.commit()
    session.refresh(user)
    
    # 4. Create JWT token
    access_token = create_access_token(data={"sub": user.phone, "user_id": user.id})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
