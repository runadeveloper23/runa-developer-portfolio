-- Create contacts table to store contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form"
ON public.contacts
FOR INSERT
TO anon
WITH CHECK (true);

-- Only authenticated users can view contacts (for admin purposes)
CREATE POLICY "Only authenticated users can view contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (true);