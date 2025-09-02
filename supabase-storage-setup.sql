-- Create storage bucket for event images
INSERT INTO storage.buckets (id, name, public)
VALUES ('event-images', 'event-images', true);

-- Set up storage policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'event-images');
CREATE POLICY "Allow uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'event-images');
CREATE POLICY "Allow updates" ON storage.objects FOR UPDATE USING (bucket_id = 'event-images');
CREATE POLICY "Allow deletes" ON storage.objects FOR DELETE USING (bucket_id = 'event-images');
