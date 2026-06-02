import { useState } from 'react';
import { FileSpreadsheet, Loader2, Save } from 'lucide-react';
import { motion } from 'motion/react';

interface SpreadsheetViewerProps {
  accessToken: string;
}

export default function SpreadsheetViewer({ accessToken }: SpreadsheetViewerProps) {
  const [sheetId, setSheetId] = useState('');
  const [range, setRange] = useState('Sheet1!A1:E5');
  const [data, setData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSheetData = async () => {
    if (!sheetId) return;
    
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      
      const json = await res.json();
      
      if (!res.ok) {
        throw new Error(json.error?.message || 'Failed to fetch spreadsheet');
      }
      
      setData(json.values || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative z-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black font-heading text-brand-blue mb-4 tracking-tighter flex items-center gap-3">
              <FileSpreadsheet className="text-brand-orange" size={32} />
              Your Progress Data
            </h2>
            <p className="text-slate-500 text-lg">
              Connect a Google Sheet to view your learning progress and external test scores. Enter a Spreadsheet ID below.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Spreadsheet ID</label>
              <input 
                type="text" 
                value={sheetId}
                onChange={(e) => setSheetId(e.target.value)}
                placeholder="e.g. 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-blue font-medium focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-sm"
              />
            </div>
            <div className="md:w-48">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Range</label>
              <input 
                type="text" 
                value={range}
                onChange={(e) => setRange(e.target.value)}
                placeholder="Sheet1!A1:E5"
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-blue font-medium focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-sm"
              />
            </div>
            <div className="flex items-end">
              <button 
                onClick={fetchSheetData}
                disabled={!sheetId || loading}
                className="w-full md:w-auto bg-brand-orange text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Load Data'}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 border border-red-100 font-medium">
              Error: {error}
            </div>
          )}

          {data.length > 0 && (
            <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {data[0]?.map((col, i) => (
                        <th key={i} className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                          {col || '-'}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.slice(1).map((row, i) => (
                      <motion.tr 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        key={i} 
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                      >
                        {/* We pad the row if there are fewer columns than the header */}
                        {Array.from({ length: Math.max(data[0]?.length || 0, row.length) }).map((_, j) => (
                          <td key={j} className="p-4 text-brand-blue font-medium whitespace-nowrap border-r border-slate-50 last:border-0">
                            {row[j] || '-'}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {!loading && !error && data.length === 0 && sheetId && (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-[24px]">
              <p className="text-slate-400 font-medium">No data found or sheet is empty for the given range.</p>
            </div>
          )}
          
          {!sheetId && (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-[24px]">
              <FileSpreadsheet className="mx-auto text-slate-300 mb-3" size={40} />
              <p className="text-slate-400 font-medium tracking-wide">Enter your sheet ID above to visualize your data</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
