# Supabase API Examples

## Your Project Details
- **Project URL**: https://alfnngetdsxwsvldvzpd.supabase.co
- **Anon Key**: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE

## API Endpoints

### 1. Get All Events
```bash
curl -X GET \
  'https://alfnngetdsxwsvldvzpd.supabase.co/rest/v1/upcoming_events?select=*' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE'
```

### 2. Get Only Active Events
```bash
curl -X GET \
  'https://alfnngetdsxwsvldvzpd.supabase.co/rest/v1/upcoming_events?select=*&is_active=eq.true' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE'
```

### 3. Add New Event
```bash
curl -X POST \
  'https://alfnngetdsxwsvldvzpd.supabase.co/rest/v1/upcoming_events' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE' \
  -H 'Content-Type: application/json' \
  -H 'Prefer: return=representation' \
  -d '{
    "title": "Climate Workshop 2025",
    "description": "Annual climate research workshop",
    "event_date": "2025-10-15T10:00:00Z",
    "event_time": "10:00",
    "location": "AIT Conference Hall",
    "is_active": true
  }'
```

### 4. Update Event
```bash
curl -X PATCH \
  'https://alfnngetdsxwsvldvzpd.supabase.co/rest/v1/upcoming_events?id=eq.YOUR_EVENT_ID' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Updated Event Title",
    "is_active": false
  }'
```

### 5. Delete Event
```bash
curl -X DELETE \
  'https://alfnngetdsxwsvldvzpd.supabase.co/rest/v1/upcoming_events?id=eq.YOUR_EVENT_ID' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE'
```

## JavaScript/Fetch Examples

### Get Events (JavaScript)
```javascript
const response = await fetch('https://alfnngetdsxwsvldvzpd.supabase.co/rest/v1/upcoming_events?select=*', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE'
  }
});
const events = await response.json();
console.log(events);
```

## API Features
- **Filtering**: `?is_active=eq.true` 
- **Ordering**: `?order=event_date.asc`
- **Limiting**: `?limit=10`
- **Selecting fields**: `?select=title,event_date`
- **Full text search**: `?title=ilike.*workshop*`

## Auto-generated API Documentation
Visit: https://alfnngetdsxwsvldvzpd.supabase.co/rest/v1/
