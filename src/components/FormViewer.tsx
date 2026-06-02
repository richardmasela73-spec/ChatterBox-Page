import { useState } from 'react';
import { ClipboardList, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface FormViewerProps {
  accessToken: string;
}

interface FormResponse {
  responseId: string;
  createTime: string;
  answers: Record<string, { textAnswers: { answers: { value: string }[] } }>;
}

interface FormQuestion {
  questionId: string;
  title: string;
}

export default function FormViewer({ accessToken }: FormViewerProps) {
  const [formId, setFormId] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [questions, setQuestions] = useState<Record<string, string>>({});
  const [responses, setResponses] = useState<FormResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFormData = async () => {
    if (!formId) return;
    
    setLoading(true);
    setError(null);
    try {
      // 1. Fetch form metadata to get question titles
      const metadataRes = await fetch(`https://forms.googleapis.com/v1/forms/${formId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      
      const metadataJson = await metadataRes.json();
      
      if (!metadataRes.ok) {
        throw new Error(metadataJson.error?.message || 'Failed to fetch form metadata');
      }

      setFormTitle(metadataJson.info?.title || 'Untitled Form');

      const questionMap: Record<string, string> = {};
      const items = metadataJson.items || [];
      items.forEach((item: any) => {
        if (item.questionItem && item.questionItem.question) {
          questionMap[item.questionItem.question.questionId] = item.title;
        } else if (item.questionGroupItem && item.questionGroupItem.questions) {
            item.questionGroupItem.questions.forEach((q: any) => {
                questionMap[q.questionId] = item.title; // Group title might apply
            });
        }
      });
      setQuestions(questionMap);

      // 2. Fetch form responses
      const responsesRes = await fetch(`https://forms.googleapis.com/v1/forms/${formId}/responses`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      
      const responsesJson = await responsesRes.json();
      
      if (!responsesRes.ok) {
        throw new Error(responsesJson.error?.message || 'Failed to fetch form responses');
      }
      
      setResponses(responsesJson.responses || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative z-10 bg-brand-light border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black font-heading text-brand-blue mb-4 tracking-tighter flex items-center gap-3">
              <ClipboardList className="text-brand-orange" size={32} />
              Feedback & Quiz Results
            </h2>
            <p className="text-slate-500 text-lg">
              Connect a Google Form to view your students' feedback and quiz results. Enter a Form ID below.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Form ID</label>
              <input 
                type="text" 
                value={formId}
                onChange={(e) => setFormId(e.target.value)}
                placeholder="e.g. 1FAIpQLSf... or from edit URL"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-blue font-medium focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
              />
            </div>
            <div className="flex items-end">
              <button 
                onClick={fetchFormData}
                disabled={!formId || loading}
                className="w-full md:w-auto bg-brand-orange text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Load Forms'}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 border border-red-100 font-medium">
              Error: {error}
            </div>
          )}

          {responses.length > 0 && (
            <div className="space-y-6">
              <div className="bg-brand-blue/5 p-5 rounded-2xl border-l-4 border-brand-orange mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Form Title</p>
                <p className="font-black text-xl text-brand-blue">{formTitle || 'Untitled Form'}</p>
                <p className="text-sm font-bold text-slate-500 mt-2">{responses.length} responses</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {responses.map((response, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={response.responseId} 
                    className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Response {i + 1}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {new Date(response.createTime).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {Object.keys(questions).length > 0 ? (
                         Object.entries(response.answers || {}).map(([questionId, answerObj]: [string, any]) => {
                           const questionTitle = questions[questionId] || 'Unknown Question';
                           const values = answerObj.textAnswers?.answers?.map(a => a.value).join(', ') || '-';
                           return (
                             <div key={questionId}>
                               <p className="text-xs font-bold text-slate-400 mb-1 leading-snug">{questionTitle}</p>
                               <p className="text-brand-blue font-medium text-sm leading-relaxed">{values}</p>
                             </div>
                           );
                         })
                      ) : (
                         <div className="text-sm text-slate-500 italic">Answers are loading or unavailable.</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {!loading && !error && responses.length === 0 && formId && (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-[24px]">
              <p className="text-slate-400 font-medium tracking-wide">No responses found for this form.</p>
            </div>
          )}
          
          {!formId && (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-[24px]">
              <ClipboardList className="mx-auto text-slate-300 mb-3" size={40} />
              <p className="text-slate-400 font-medium tracking-wide">Enter your form ID above to view responses</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
