import { useState, useEffect } from 'react';
import { Calendar, Loader2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface CalendarViewerProps {
  accessToken: string;
}

interface CalendarEvent {
  id: string;
  summary: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  htmlLink: string;
}

export default function CalendarViewer({ accessToken }: CalendarViewerProps) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const timeMin = new Date().toISOString();
      const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}&maxResults=10&singleEvents=true&orderBy=startTime`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      
      const json = await res.json();
      
      if (!res.ok) {
        throw new Error(json.error?.message || 'Failed to fetch calendar events');
      }
      
      setEvents(json.items || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [accessToken]);

  const formatEventTime = (event: CalendarEvent) => {
    if (event.start.dateTime) {
      const date = new Date(event.start.dateTime);
      return date.toLocaleString();
    } else if (event.start.date) {
      const date = new Date(event.start.date);
      return date.toLocaleDateString();
    }
    return 'Unknown time';
  };

  return (
    <section className="py-20 relative z-10 bg-brand-light border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black font-heading text-brand-blue mb-4 tracking-tighter flex items-center gap-3">
              <Calendar className="text-brand-orange" size={32} />
              Upcoming Classes
            </h2>
            <p className="text-slate-500 text-lg">
              Your scheduled English lessons and events from Google Calendar.
            </p>
          </div>
          <button 
            onClick={fetchEvents}
            disabled={loading}
            className="w-full md:w-auto bg-white border-2 border-slate-200 text-brand-blue px-6 py-3 rounded-2xl font-bold hover:border-brand-orange hover:text-brand-orange transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Calendar size={20} />}
            <span>Refresh Schedule</span>
          </button>
        </div>

        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 border border-red-100 font-medium">
              Error: {error}
            </div>
          )}

          {events.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={event.id} 
                  className="bg-slate-50 rounded-[24px] border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl border border-brand-orange/20">
                      <Clock size={24} />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-lg text-brand-blue mb-2 leading-tight">
                    {event.summary || 'Untitled Event'}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                    {formatEventTime(event)}
                  </p>
                  <a 
                    href={event.htmlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] font-bold text-brand-orange uppercase tracking-widest hover:text-brand-blue transition-colors"
                  >
                    View in Calendar &rarr;
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            !loading && !error && (
              <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-[24px]">
                <Calendar className="mx-auto text-slate-300 mb-4" size={48} />
                <h3 className="text-xl font-bold text-brand-blue mb-2">No Upcoming Classes</h3>
                <p className="text-slate-500 font-medium tracking-wide">Your schedule is clear for now.</p>
              </div>
            )
          )}
          
          {loading && events.length === 0 && (
            <div className="flex justify-center py-16 border-2 border-dashed border-slate-200 rounded-[24px]">
              <Loader2 className="animate-spin text-brand-orange" size={40} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
