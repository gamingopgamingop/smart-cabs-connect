
DROP POLICY "Drivers can update slots" ON public.slots;
CREATE POLICY "Drivers can update own ride slots" ON public.slots FOR UPDATE TO authenticated
  USING (ride_id IN (SELECT r.id FROM public.rides r JOIN public.drivers d ON r.driver_id = d.id WHERE d.user_id = auth.uid()));
