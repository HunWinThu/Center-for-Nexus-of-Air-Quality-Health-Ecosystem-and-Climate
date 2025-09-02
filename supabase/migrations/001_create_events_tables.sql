-- Create upcoming_events table
CREATE TABLE upcoming_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  event_date timestamp with time zone NOT NULL,
  event_time text NOT NULL,
  location text NOT NULL,
  image_url text,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create admin_users table for authentication
CREATE TABLE admin_users (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  role text DEFAULT 'admin',
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE upcoming_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for upcoming_events (public can read, only admins can modify)
CREATE POLICY "Everyone can read upcoming events" ON upcoming_events
  FOR SELECT USING (true);

CREATE POLICY "Only admins can insert events" ON upcoming_events
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM admin_users WHERE email = auth.email())
  );

CREATE POLICY "Only admins can update events" ON upcoming_events
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM admin_users WHERE email = auth.email())
  );

CREATE POLICY "Only admins can delete events" ON upcoming_events
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM admin_users WHERE email = auth.email())
  );

-- Create policies for admin_users
CREATE POLICY "Admins can read admin users" ON admin_users
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM admin_users WHERE email = auth.email())
  );

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_upcoming_events_updated_at 
  BEFORE UPDATE ON upcoming_events 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert a sample admin user (replace with your email)
INSERT INTO admin_users (email) VALUES ('your-email@example.com');
