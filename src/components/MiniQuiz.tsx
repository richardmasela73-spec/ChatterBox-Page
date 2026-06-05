import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle, RotateCcw, Loader2, Save } from 'lucide-react';
import { getAccessToken, googleSignIn } from '../lib/auth';
import { createOrGetSpreadsheetId } from '../lib/sheets';

const QUIZ_QUESTIONS = [
  { question: "I ___ from Indonesia.", options: ["am", "is", "are", "be"], correct: 0 },
  { question: "The opposite of 'Happy' is ___.", options: ["Sad", "Angry", "Excited", "Tired"], correct: 0 },
  { question: "'The cat slept on the mat.' Where did the cat sleep?", options: ["On the chair", "Under the table", "On the mat", "Outside"], correct: 2 },
  { question: "She ___ to school every day.", options: ["go", "goes", "is", "going"], correct: 1 },
  { question: "A person who teaches is a ___.", options: ["Doctor", "Teacher", "Engineer", "Pilot"], correct: 1 },
  { question: "They ___ playing football right now.", options: ["am", "is", "are", "be"], correct: 2 },
  { question: "'John likes apples but hates bananas.' What fruit does John dislike?", options: ["Apples", "Oranges", "Bananas", "Grapes"], correct: 2 },
  { question: "___ you like to drink some coffee?", options: ["Would", "Do", "Are", "Have"], correct: 0 },
  { question: "The synonym of 'Big' is ___.", options: ["Small", "Huge", "Tiny", "Little"], correct: 1 },
  { question: "I have been living here ___ 2010.", options: ["for", "since", "in", "on"], correct: 1 },
  { question: "If it rains, I ___ at home.", options: ["stay", "will stay", "stayed", "staying"], correct: 1 },
  { question: "To 'purchase' means to ___.", options: ["Sell", "Buy", "Give", "Take"], correct: 1 },
  { question: "He is the ___ boy in the class.", options: ["tall", "taller", "tallest", "more tall"], correct: 2 },
  { question: "We ___ to the cinema last night.", options: ["go", "goes", "went", "gone"], correct: 2 },
  { question: "What is the plural form of 'child'?", options: ["childs", "children", "childrens", "childes"], correct: 1 },
  { question: "I don't have ___ money.", options: ["some", "any", "many", "A few"], correct: 1 },
  { question: "'The train arrived at 8:00 AM. It was 15 minutes late.' What time was the train scheduled to arrive?", options: ["8:15 AM", "7:45 AM", "8:00 AM", "7:30 AM"], correct: 1 },
  { question: "A place where you borrow books is a ___.", options: ["Bank", "Hospital", "Library", "School"], correct: 2 },
  { question: "She speaks English very ___.", options: ["good", "well", "bad", "nice"], correct: 1 },
  { question: "My brother ___ his homework yet.", options: ["hasn't finished", "haven't finished", "didn't finished", "don't finish"], correct: 0 },
];

export default function MiniQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedStatus, setSavedStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === QUIZ_QUESTIONS[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setSavedStatus('idle');
  };

  const handleSaveResult = async () => {
    setIsSubmitting(true);
    setSavedStatus('idle');
    try {
      let accessToken = await getAccessToken();
      let userInfo = null;
      if (!accessToken) {
        const result = await googleSignIn();
        if (result) {
          accessToken = result.accessToken;
          userInfo = result.user;
        } else {
          setIsSubmitting(false);
          return;
        }
      }

      const spreadsheetId = await createOrGetSpreadsheetId(accessToken);
      
      const sheetRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Bookings!A:H:append?valueInputOption=USER_ENTERED`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values: [[
            new Date().toLocaleString(),
            userInfo?.displayName || 'Quiz Taker',
            userInfo?.email || '',
            '-',
            `Quiz Score: ${score}/${QUIZ_QUESTIONS.length}`,
            score >= 17 ? "C1 (Advanced)" : score >= 13 ? "B2 (Upper Intermediate)" : score >= 9 ? "B1 (Intermediate)" : score >= 5 ? "A2 (Elementary)" : "A1 (Beginner)",
            '-',
            '-'
          ]]
        })
      });

      if (!sheetRes.ok) throw new Error("Failed to save result");
      setSavedStatus('success');
    } catch (err) {
      console.error(err);
      setSavedStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-10 w-full bg-white rounded-[40px] shadow-2xl p-8 border border-slate-100 min-h-[400px] flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-brand-blue">Test Your Level</h3>
          <p className="text-slate-400 font-medium mt-1">Comprehensive 20-question quiz</p>
        </div>
        {!showResult && (
          <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange font-bold text-lg">
            {currentQuestion + 1}/{QUIZ_QUESTIONS.length}
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-slate-800">
                {QUIZ_QUESTIONS[currentQuestion].question}
              </h4>
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => {
                  let buttonClass = "w-full text-left px-5 py-4 rounded-2xl border-2 transition-all font-bold text-slate-700 ";
                  
                  if (!isAnswered) {
                    buttonClass += "border-slate-100 hover:border-brand-blue hover:bg-slate-50";
                  } else {
                    if (index === QUIZ_QUESTIONS[currentQuestion].correct) {
                      buttonClass += "border-green-500 bg-green-50 text-green-700";
                    } else if (index === selectedOption) {
                      buttonClass += "border-red-500 bg-red-50 text-red-700";
                    } else {
                      buttonClass += "border-slate-100 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <div className="flex justify-between items-center">
                        <span>{option}</span>
                        {isAnswered && index === QUIZ_QUESTIONS[currentQuestion].correct && (
                          <CheckCircle2 size={20} className="text-green-500" />
                        )}
                        {isAnswered && index === selectedOption && index !== QUIZ_QUESTIONS[currentQuestion].correct && (
                          <XCircle size={20} className="text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="w-24 h-24 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-black text-brand-yellow">
                  {score}/{QUIZ_QUESTIONS.length}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-brand-blue">
                {score >= 17 ? "C1 (Advanced)" : score >= 13 ? "B2 (Upper Intermediate)" : score >= 9 ? "B1 (Intermediate)" : score >= 5 ? "A2 (Elementary)" : "A1 (Beginner)"}
              </h4>
              <p className="text-slate-500 font-medium">
                Based on your results, we predict your English level is {score >= 17 ? "C1 (Advanced)" : score >= 13 ? "B2 (Upper Intermediate)" : score >= 9 ? "B1 (Intermediate)" : score >= 5 ? "A2 (Elementary)" : "A1 (Beginner)"}.
              </p>
              <p className="text-brand-yellow font-bold text-lg mt-2">
                Congratulations on completing the quiz!
              </p>
              
              {savedStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl flex items-center justify-center gap-2 font-bold mt-4">
                  <CheckCircle2 size={20} /> Result Saved!
                </div>
              ) : (
                <button
                  onClick={handleSaveResult}
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-brand-orange text-white rounded-2xl font-bold mt-4 hover:bg-brand-orange/90 transition-all shadow-lg hover:-translate-y-1 disabled:opacity-75 disabled:hover:-translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Saving...
                    </>
                  ) : (
                    <>
                      <Save size={18} /> Save Result to SpreadSheet
                    </>
                  )}
                </button>
              )}

              <button
                onClick={restartQuiz}
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-brand-blue text-white rounded-2xl font-bold mt-2 hover:bg-brand-blue/90 transition-all shadow-lg hover:-translate-y-1"
              >
                <RotateCcw size={18} /> Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
