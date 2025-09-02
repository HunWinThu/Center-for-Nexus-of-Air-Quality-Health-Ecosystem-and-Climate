-- Fix Row Level Security policies for upcoming_events table

-- First, drop existing policies
DROP POLICY IF EXISTS "Allow public read access to active events" ON upcoming_events;
DROP POLICY IF EXISTS "Allow authenticated users full access" ON upcoming_events;

-- Create new policies that allow public access for admin operations
-- Allow public read access to all events (for website display)
CREATE POLICY "Allow public read access" ON upcoming_events
  FOR SELECT USING (true);

-- Allow public insert access (for admin panel without authentication)
CREATE POLICY "Allow public insert access" ON upcoming_events
  FOR INSERT WITH CHECK (true);

-- Allow public update access (for admin panel without authentication)  
CREATE POLICY "Allow public update access" ON upcoming_events
  FOR UPDATE USING (true);

-- Allow public delete access (for admin panel without authentication)
CREATE POLICY "Allow public delete access" ON upcoming_events
  FOR DELETE USING (true);

-- Also create the storage bucket and policies for images if not exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('event-images', 'event-images', true) 
ON CONFLICT (id) DO NOTHING;

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Public read access" ON storage.objects;
DROP POLICY IF EXISTS "Public upload access" ON storage.objects;
DROP POLICY IF EXISTS "Public update access" ON storage.objects;
DROP POLICY IF EXISTS "Public delete access" ON storage.objects;

-- Storage policies for public access
CREATE POLICY "Public read access" ON storage.objects 
FOR SELECT USING (bucket_id = 'event-images');

CREATE POLICY "Public upload access" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'event-images');

CREATE POLICY "Public update access" ON storage.objects 
FOR UPDATE USING (bucket_id = 'event-images');

CREATE POLICY "Public delete access" ON storage.objects 
FOR DELETE USING (bucket_id = 'event-images');
