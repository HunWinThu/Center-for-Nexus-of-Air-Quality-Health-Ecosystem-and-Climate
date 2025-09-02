import React, { useState, useEffect } from 'react';

interface UpcomingEvent {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  location: string;
  image_url?: string;
  is_active: boolean;
}

const SimpleAdminPanel = () => {
  const [events, setEvents] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    event_date: '',
    event_time: '',
    location: '',
    image_url: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Load events when component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setError(null);
      // Try to connect to Supabase
      const { supabase } = await import('@/services/supabase');
      
      const { data, error } = await supabase
        .from('upcoming_events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Unable to connect to database. This might be because Supabase is not configured yet.');
      // Set some mock data so the interface still works
      setEvents([
        {
          id: '1',
          title: 'Sample Event (Demo)',
          description: 'This is a demo event. Configure Supabase to see real data.',
          event_date: new Date().toISOString(),
          event_time: '10:00',
          location: 'Demo Location',
          is_active: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const addEvent = async () => {
    if (!newEvent.title || !newEvent.event_date || !newEvent.event_time) {
      alert('Please fill in title, date, and time');
      return;
    }

    try {
      setUploading(true);
      const { supabase } = await import('@/services/supabase');
      
      let imageUrl = '';
      
      // Upload image if one is selected
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `event-${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('event-images')
          .upload(fileName, imageFile);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          alert('Image upload failed, but event will be saved without image');
        } else {
          // Get public URL for the uploaded image
          const { data: urlData } = supabase.storage
            .from('event-images')
            .getPublicUrl(fileName);
          imageUrl = urlData.publicUrl;
        }
      }

      const eventDateTime = new Date(`${newEvent.event_date}T${newEvent.event_time}`).toISOString();
      
      const { error } = await supabase
        .from('upcoming_events')
        .insert({
          ...newEvent,
          event_date: eventDateTime,
          image_url: imageUrl,
        });

      if (error) throw error;

      alert('Event added successfully!');
      setNewEvent({ title: '', description: '', event_date: '', event_time: '', location: '', image_url: '' });
      setImageFile(null);
      setImagePreview(null);
      fetchEvents();
    } catch (err) {
      console.error('Error adding event:', err);
      alert('Error adding event: ' + (err as Error).message + '\nNote: This requires Supabase to be configured.');
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteEvent = async (id: string) => {
    if (!confirm('Delete this event?')) return;

    try {
      const { supabase } = await import('@/services/supabase');
      const { error } = await supabase
        .from('upcoming_events')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchEvents();
    } catch (err) {
      alert('Error deleting event: ' + (err as Error).message + '\nNote: This requires Supabase to be configured.');
    }
  };

  const toggleEventStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { supabase } = await import('@/services/supabase');
      const { error } = await supabase
        .from('upcoming_events')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      fetchEvents();
    } catch (err) {
      alert('Error updating event: ' + (err as Error).message + '\nNote: This requires Supabase to be configured.');
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div>Loading events...</div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '15px' }}>
        <div>
          <h1 style={{ margin: '0', color: '#333' }}>🎯 Event Management Panel</h1>
          <p style={{ margin: '5px 0', color: '#666' }}>Manage your upcoming events easily</p>
        </div>
        <div>
          <a 
            href="/" 
            style={{ 
              marginRight: '15px', 
              color: '#007bff', 
              textDecoration: 'none',
              padding: '8px 15px',
              border: '1px solid #007bff',
              borderRadius: '4px',
              transition: 'all 0.2s'
            }}
          >
            🏠 View Website
          </a>
        </div>
      </div>

      {/* Error message if Supabase is not configured */}
      {error && (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffeaa7', 
          borderRadius: '8px', 
          padding: '15px', 
          marginBottom: '20px',
          color: '#856404'
        }}>
          <strong>Database Connection Issue:</strong> {error}
          <br />
          <small>You can still test the interface, but data won't be saved permanently.</small>
        </div>
      )}

      {/* Add New Event */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '25px', 
        borderRadius: '8px', 
        marginBottom: '30px',
        border: '1px solid #e9ecef'
      }}>
                  <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Your Events</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '15px', 
          marginBottom: '15px' 
        }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Event Title *
            </label>
            <input
              type="text"
              placeholder="e.g., Annual Climate Conference"
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Location *
            </label>
            <input
              type="text"
              placeholder="e.g., AIT Conference Hall"
              value={newEvent.location}
              onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Date *
            </label>
            <input
              type="date"
              value={newEvent.event_date}
              onChange={(e) => setNewEvent({...newEvent, event_date: e.target.value})}
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Time *
            </label>
            <input
              type="time"
              value={newEvent.event_time}
              onChange={(e) => setNewEvent({...newEvent, event_time: e.target.value})}
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
            Description
          </label>
          <textarea
            placeholder="Brief description of the event..."
            value={newEvent.description}
            onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
            style={{ 
              width: '100%', 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              minHeight: '80px',
              fontSize: '14px',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Image Upload Section */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
            Event Image (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ 
              width: '100%', 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              fontSize: '14px',
              backgroundColor: '#f8f9fa'
            }}
          />
          {imagePreview && (
            <div style={{ marginTop: '10px' }}>
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{ 
                  maxWidth: '200px', 
                  maxHeight: '150px', 
                  borderRadius: '8px', 
                  border: '2px solid #ddd',
                  objectFit: 'cover'
                }} 
              />
              <button
                type="button"
                onClick={() => {
                  setImageFile(null);
                  setImagePreview(null);
                }}
                style={{
                  marginLeft: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                🗑️ Remove
              </button>
            </div>
          )}
        </div>
        
        <button
          onClick={addEvent}
          disabled={uploading}
          style={{ 
            padding: '12px 25px', 
            backgroundColor: uploading ? '#6c757d' : '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: uploading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {uploading ? '⏳ Uploading...' : '✅ Add Event'}
        </button>
      </div>

      {/* Events List */}
      <div>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>📋 All Events ({events.length})</h2>
        
        {events.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <p style={{ fontSize: '18px', color: '#666' }}>No events found</p>
            <p style={{ color: '#888' }}>Add your first event using the form above!</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '20px' }}>
            {events.map((event) => {
              const eventDate = new Date(event.event_date);
              const isUpcoming = eventDate > new Date();
              
              return (
                <div 
                  key={event.id} 
                  style={{ 
                    border: '1px solid #ddd', 
                    borderRadius: '8px', 
                    padding: '20px', 
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '18px' }}>
                        {event.title}
                      </h3>
                      
                      <div style={{ marginBottom: '10px' }}>
                        <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '14px' }}>
                          <strong>{eventDate.toLocaleDateString()}</strong> at <strong>{event.event_time}</strong>
                        </p>
                        <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '14px' }}>
                          {event.location}
                        </p>
                      </div>
                      
                      {event.description && (
                        <p style={{ margin: '10px 0', color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
                          {event.description}
                        </p>
                      )}
                      
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '15px' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          backgroundColor: event.is_active ? '#d4edda' : '#f8d7da',
                          color: event.is_active ? '#155724' : '#721c24'
                        }}>
                          {event.is_active ? 'Active' : 'Inactive'}
                        </span>
                        
                        <span style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          backgroundColor: isUpcoming ? '#cce5ff' : '#ffeecc',
                          color: isUpcoming ? '#004085' : '#856404'
                        }}>
                          {isUpcoming ? '🔮 Upcoming' : '⏰ Past'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Event Image */}
                    {event.image_url && (
                      <div style={{ marginLeft: '20px', marginRight: '10px' }}>
                        <img 
                          src={event.image_url} 
                          alt={event.title}
                          style={{ 
                            width: '120px', 
                            height: '90px', 
                            objectFit: 'cover', 
                            borderRadius: '8px',
                            border: '2px solid #ddd'
                          }} 
                        />
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '20px' }}>
                      <button
                        onClick={() => toggleEventStatus(event.id, event.is_active)}
                        style={{ 
                          padding: '6px 12px', 
                          backgroundColor: event.is_active ? '#ffc107' : '#28a745', 
                          color: 'white', 
                          border: 'none', 
                          borderRadius: '4px', 
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        {event.is_active ? 'Hide' : 'Show'}
                      </button>
                      
                      <button
                        onClick={() => deleteEvent(event.id)}
                        style={{ 
                          padding: '6px 12px', 
                          backgroundColor: '#dc3545', 
                          color: 'white', 
                          border: 'none', 
                          borderRadius: '4px', 
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleAdminPanel;
