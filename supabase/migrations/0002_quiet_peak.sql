/*
  # Business Listings Schema

  1. New Tables
    - `businesses`
      - `id` (uuid, primary key)
      - `owner_id` (uuid, references profiles)
      - `name` (text)
      - `description` (text)
      - `address` (text)
      - `city` (text)
      - `state` (text)
      - `zip` (text)
      - `phone` (text)
      - `email` (text)
      - `website` (text)
      - `category` (text)
      - `status` (text) - For moderation: pending, approved, rejected
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
  2. Security
    - Enable RLS
    - Policies for viewing approved businesses
    - Policies for owners managing their businesses
*/

CREATE TABLE IF NOT EXISTS businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text,
  address text,
  city text,
  state text,
  zip text,
  phone text,
  email text,
  website text,
  category text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

-- Everyone can view approved businesses
CREATE POLICY "Anyone can view approved businesses" ON businesses
  FOR SELECT USING (status = 'approved');

-- Users can manage their own businesses
CREATE POLICY "Users can manage own businesses" ON businesses
  FOR ALL USING (auth.uid() = owner_id);

-- Update trigger for updated_at
CREATE TRIGGER set_businesses_updated_at
  BEFORE UPDATE ON businesses
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();