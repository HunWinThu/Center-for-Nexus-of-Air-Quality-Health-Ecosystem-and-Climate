# Admin Panel Setup Instructions

## 🎯 **What You've Built:**

A complete admin panel for managing upcoming events with:
- ✅ Secure admin authentication
- ✅ Event creation/editing with image upload
- ✅ Automatic event expiry (moves to "All News" when past)
- ✅ Real-time dashboard
- ✅ Professional UI with dark/light theme support

## 📋 **Setup Steps:**

### **1. Database Setup (Supabase)**

1. **Go to your Supabase Dashboard**: https://app.supabase.com
2. **Navigate to SQL Editor**
3. **Run this SQL** (copy from `supabase/migrations/001_create_events_tables.sql`):

```sql
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

-- Create policies (copy the rest from the SQL file...)
```

4. **IMPORTANT**: Replace `your-email@example.com` with your actual email address in the admin_users insert statement

### **2. Storage Setup (For Event Images)**

1. **In Supabase Dashboard** → Storage
2. **Create a new bucket** called `events`
3. **Make it public** (for image display)
4. **Set up policies** for upload access

### **3. Environment Variables**

Make sure your `.env.local` has:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### **4. Create Your Admin Account**

1. **Add your email to admin_users table** (via SQL)
2. **Go to**: `http://localhost:5173/admin/login`
3. **Use "Send Magic Link"** option first time
4. **Check your email** and click the magic link
5. **Next time**: Use email + password login

## 🚀 **How to Use:**

### **Admin Panel Access:**
- **URL**: `http://localhost:5173/admin/login`
- **Login**: Use your email (must be in admin_users table)
- **Dashboard**: `http://localhost:5173/admin/dashboard`

### **Managing Events:**
1. **Add Event**: Admin Dashboard → "Add New Event"
2. **Edit Event**: Click edit button on any event
3. **Delete Event**: Click delete button (with confirmation)
4. **Toggle Active/Inactive**: Click eye button

### **Event Features:**
- ✅ **Title & Description**: Rich text support
- ✅ **Date & Time**: Easy date/time pickers
- ✅ **Location**: Flexible location field
- ✅ **Image Upload**: Direct to Supabase Storage
- ✅ **Active Status**: Show/hide from public view
- ✅ **Auto-Expiry**: Past events move to "All News" automatically

### **Public Display:**
- **Upcoming Events Tab**: Shows future active events
- **All News Tab**: Shows news + past events (automatically moved)
- **Real-time Updates**: Events move automatically when they expire

## 🔧 **Customization Options:**

### **Styling:**
- Components use your existing UI theme
- Fully responsive design
- Dark/light mode compatible

### **Permissions:**
- Only admin_users can access admin panel
- Public can view events (via RLS policies)
- Secure file upload with validation

### **Extending:**
- Add more event fields in database
- Customize email templates
- Add event categories
- Implement event registration

## 🐛 **Troubleshooting:**

### **Can't Login:**
1. Check if your email is in `admin_users` table
2. Verify Supabase environment variables
3. Check browser console for errors

### **Images Not Uploading:**
1. Verify `events` storage bucket exists
2. Check bucket is public
3. Verify storage policies allow uploads

### **Events Not Showing:**
1. Check `is_active` is true
2. Verify event_date format
3. Check browser console for API errors

## 📱 **Mobile Support:**
- Admin panel works on mobile devices
- Responsive design for all screen sizes
- Touch-friendly interface

## 🎨 **UI Components Used:**
- Cards, Buttons, Inputs from your UI library
- Date pickers for easy scheduling
- Image upload with drag & drop
- Loading states and error handling
- Success/error notifications

Your admin panel is now ready! 🎉
