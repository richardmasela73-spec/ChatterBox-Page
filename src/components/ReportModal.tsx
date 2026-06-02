import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-20 pb-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-blue/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-slate-50 relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          <div className="flex items-center justify-between p-4 bg-white border-b border-slate-100 shrink-0">
            <h3 className="font-bold text-brand-blue flex items-center gap-2">
              Student Learning Report Preview
            </h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto p-4 sm:p-8 bg-slate-50 text-brand-blue flex-grow relative" style={{ fontFamily: 'Inter, sans-serif' }}>
             {/* Report Container */}
             <div className="max-w-3xl mx-auto bg-white shadow-md border border-slate-200">
                {/* Header */}
                <div className="px-8 py-6 border-b-2 border-slate-200 flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-slate-400 tracking-wider">STUDENT LEARNING REPORT</h2>
                    <p className="text-sm text-slate-500">3-Month English Programme</p>
                  </div>
                  <div className="bg-brand-blue text-white px-6 py-2 font-bold text-sm">
                    ChatterBox
                  </div>
                </div>

                <div className="p-8">
                  {/* Title Area */}
                  <div className="mb-8 relative">
                    <h1 className="text-4xl font-black text-[#1e4a79] mb-2 tracking-tight">Student Learning Report</h1>
                    <p className="text-[#3273b5] font-medium text-lg">3-Month English Course | Level 3</p>
                    {/* Watermark-like effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none text-[150px] font-black tracking-tighter whitespace-nowrap overflow-hidden flex items-center justify-center">
                       OBROLAN
                    </div>
                  </div>

                  {/* Student Information */}
                  <h3 className="text-xl font-black text-[#1e4a79] mb-3 border-b-2 border-[#8db5d8] pb-1">Student Information</h3>
                  <table className="w-full border-collapse mb-8 text-sm">
                    <tbody>
                      <tr className="bg-[#b3e0c3]">
                        <td className="border border-slate-600 font-bold p-2 w-1/4">Student Name</td>
                        <td className="border border-slate-600 bg-white p-2">Athiya</td>
                        <td className="border border-slate-600 font-bold p-2 w-1/4">English Level</td>
                        <td className="border border-slate-600 bg-white p-2">Level 3</td>
                      </tr>
                      <tr className="bg-[#b3e0c3]">
                        <td className="border border-slate-600 font-bold p-2">Programme</td>
                        <td className="border border-slate-600 bg-white p-2">3-Month English Course</td>
                        <td className="border border-slate-600 font-bold p-2">Total Meetings</td>
                        <td className="border border-slate-600 bg-white p-2">28 Sessions Completed</td>
                      </tr>
                      <tr className="bg-[#b3e0c3]">
                        <td className="border border-slate-600 font-bold p-2">Absent</td>
                        <td className="border border-slate-600 bg-white p-2">-</td>
                        <td className="border border-slate-600 font-bold p-2">Attendance Rate</td>
                        <td className="border border-slate-600 bg-white p-2">-</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Level 3 Learning Objectives */}
                  <h3 className="text-xl font-black text-[#1e4a79] mb-3 border-b-2 border-[#8db5d8] pb-1">Level 3 Learning Objectives</h3>
                  <p className="text-sm mb-4 leading-relaxed text-slate-700">
                    Students at Level 3 continue to develop their language skills, focusing on the past tense, present simple tense, and vocabulary expansion. They learn to use intensifiers to express degrees of intensity, practice forming opinions and making requests, and develop their reading and writing skills through various activities.
                  </p>
                  
                  <table className="w-full border-collapse mb-8 text-sm">
                    <thead>
                      <tr className="bg-[#e0eed7]">
                        <th className="border border-slate-600 font-bold p-2 w-1/4 text-center">Focus Area</th>
                        <th className="border border-slate-600 font-bold p-2 text-center">Learning Objectives</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-600 font-bold p-3 bg-[#e0eed7]">Grammar</td>
                        <td className="border border-slate-600 p-3 leading-relaxed">
                          Past simple tense (regular & irregular verbs), past tense of "to be," intensifiers, imperatives, the phrase "I'd like," personal pronouns, possessive adjectives, and present simple tense.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-600 font-bold p-3 bg-[#e0eed7]">Vocabulary</td>
                        <td className="border border-slate-600 p-3 leading-relaxed">
                          Words related to past events, feelings, opinions, and common uncountable nouns.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-600 font-bold p-3 bg-[#e0eed7]">Communication</td>
                        <td className="border border-slate-600 p-3 leading-relaxed">
                          Expressing desires and preferences, giving commands and instructions, forming and sharing opinions, and making requests.
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Performance Indicators */}
                  <h3 className="text-xl font-black text-[#1e4a79] mb-1 border-b-2 border-[#8db5d8] pb-1">Performance Indicators</h3>
                  <p className="text-xs italic text-slate-500 mb-4">
                    Scale: 1 = Needs Work  |  2 = Developing  |  3 = Proficient  |  4 = Excellent
                  </p>
                  
                  <h4 className="text-sm font-black text-[#1e4a79] mb-2 uppercase tracking-wide">CONVERSATION</h4>
                  <table className="w-full border-collapse mb-6 text-sm">
                    <thead>
                      <tr className="bg-[#e0eed7]">
                        <th className="border border-slate-600 font-bold p-2 w-1/2 text-center">Indicator</th>
                        <th className="border border-slate-600 font-bold p-2 text-center">Score & Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#f0f5ec]">
                        <td className="border border-slate-600 p-2 pl-4">Vocabulary</td>
                        <td className="border border-slate-600 p-2 text-center text-slate-700 font-medium">
                          <span className="text-[#c62828] font-bold">3/4</span> Proficient
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-600 p-2 pl-4 bg-[#f0f5ec]">Conversational Skills</td>
                        <td className="border border-slate-600 p-2 text-center text-slate-700 font-medium">
                          <span className="text-[#c62828] font-bold">3/4</span> Proficient
                        </td>
                      </tr>
                      <tr className="bg-[#f0f5ec]">
                        <td className="border border-slate-600 p-2 pl-4">Expressing Ideas</td>
                        <td className="border border-slate-600 p-2 text-center text-slate-700 font-medium">
                          <span className="text-[#c62828] font-bold">2/4</span> Developing
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-600 p-2 pl-4 bg-[#f0f5ec]">Grammar</td>
                        <td className="border border-slate-600 p-2 text-center text-slate-700 font-medium">
                          <span className="text-[#c62828] font-bold">3/4</span> Proficient
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="text-sm font-black text-[#1e4a79] mb-2 uppercase tracking-wide">WRITING</h4>
                  <table className="w-full border-collapse mb-8 text-sm">
                    <thead>
                      <tr className="bg-[#e0eed7]">
                        <th className="border border-slate-600 font-bold p-2 w-1/2 text-center">Indicator</th>
                        <th className="border border-slate-600 font-bold p-2 text-center">Score & Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#f0f5ec]">
                        <td className="border border-slate-600 p-2 pl-4">Vocabulary</td>
                        <td className="border border-slate-600 p-2 text-center text-slate-700 font-medium">
                          <span className="text-[#c62828] font-bold">3/4</span> Proficient
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-600 p-2 pl-4 bg-[#f0f5ec]">Organization</td>
                        <td className="border border-slate-600 p-2 text-center text-slate-700 font-medium">
                          <span className="text-[#c62828] font-bold">2/4</span> Developing
                        </td>
                      </tr>
                      <tr className="bg-[#f0f5ec]">
                        <td className="border border-slate-600 p-2 pl-4">Ideas</td>
                        <td className="border border-slate-600 p-2 text-center text-slate-700 font-medium">
                          <span className="text-[#c62828] font-bold">2/4</span> Developing
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Teacher's Comments */}
                  <h3 className="text-xl font-black text-[#1e4a79] mb-3 border-b-2 border-[#8db5d8] pb-1">Teacher's Comments</h3>
                  
                  <h4 className="text-sm font-bold text-[#1e4a79] mb-1">Positive Standout</h4>
                  <div className="border border-slate-600 bg-[#eef7e9] p-4 text-sm leading-relaxed mb-4 text-slate-700">
                    Athiya has shown commendable dedication and consistency throughout the 3-month program. She demonstrates a solid understanding of Level 3 vocabulary and is able to apply grammar structures covered in class—including the past simple tense and intensifiers—with increasing confidence. Her willingness to engage in discussions and share her ideas contributes positively to the classroom environment, and her progress in expressing opinions is particularly encouraging.
                  </div>

                  <h4 className="text-sm font-bold text-[#1e4a79] mb-1">Areas for Improvement</h4>
                  <div className="border border-slate-600 bg-[#eef7e9] p-4 text-sm leading-relaxed mb-4 text-slate-700">
                    While Athiya's participation is developing well, she can further strengthen her writing by constructing longer, more detailed sentences and ensuring ideas are clearly organized. Additionally, expanding the range of vocabulary used in both speaking and writing will help her communicate with greater depth and precision.
                  </div>

                  <h4 className="text-sm font-bold text-[#1e4a79] mb-1">Overall Summary</h4>
                  <div className="border border-slate-600 bg-[#eef7e9] p-4 text-sm leading-relaxed mb-8 text-slate-700 italic">
                    Athiya is a motivated and capable student who has made meaningful progress over the course of this 3-month program. With continued effort and practice, she is well on track to further develop her English skills at Level 3 and beyond.
                  </div>

                  {/* Teacher's Suggestion */}
                  <h3 className="text-xl font-black text-[#1e4a79] mb-3 border-b-2 border-[#8db5d8] pb-1">Teacher's Suggestion</h3>
                  <div className="border border-slate-600 bg-[#eef7e9] p-4 text-sm leading-relaxed mb-8 text-slate-700">
                    To continue building on the excellent progress made this term, Athiya is encouraged to practice reading short English texts at home and to write a few sentences each day about her experiences. This will reinforce the past tense and vocabulary covered in class. She may also find it helpful to practise speaking English with a family member or friend for at least 10 minutes a day. The following resources are recommended to support her learning journey:
                    <ul className="mt-2 space-y-1">
                      <li className="flex gap-2"><span className="text-[#3273b5]">•</span> Grammar practice: <a href="#" className="text-[#3273b5] hover:underline flex items-center gap-1">https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar <ExternalLink size={12} /></a></li>
                      <li className="flex gap-2"><span className="text-[#3273b5]">•</span> Reading & listening: <a href="#" className="text-[#3273b5] hover:underline flex items-center gap-1">https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary <ExternalLink size={12} /></a></li>
                    </ul>
                  </div>

                  {/* Signatures */}
                  <div className="flex justify-between items-end mt-16 px-4">
                    <div className="text-center w-64">
                       <div className="h-16 relative w-full mb-2 border-b border-black flex justify-center">
                          {/* Signature Graphic Mock */}
                          <svg viewBox="0 0 200 60" className="absolute bottom-0 w-32 left-1/2 -translate-x-1/2 opacity-80" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M 10 30 Q 30 10 50 30 T 90 20 Q 100 50 120 30 T 170 30 Q 180 20 190 40" />
                            <path d="M 30 15 Q 50 5 60 50" />
                            <circle cx="165" cy="15" r="2" fill="black" stroke="none" />
                          </svg>
                       </div>
                       <p className="font-bold relative z-10 bg-white inline-block px-2 text-sm text-slate-800">Manase Richard Masela., S.Pd</p>
                       <p className="text-xs text-slate-500 mt-1">Teacher's Signature</p>
                    </div>
                    
                    <div className="text-center w-64">
                       <div className="h-4 w-full mb-2 border-b border-black"></div>
                       <p className="font-bold relative z-10 bg-white inline-block px-2 text-sm text-slate-800">Tangerang Selatan, April 18, 2026</p>
                       <p className="text-xs text-slate-500 mt-1">Date</p>
                    </div>
                  </div>

                </div>
                
                {/* Footer */}
                <div className="px-8 py-4 bg-slate-100 text-[10px] text-slate-400 mt-8 border-t border-slate-200">
                  PTC ChatterBox | Confidential Student Report | 2025-2026
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
