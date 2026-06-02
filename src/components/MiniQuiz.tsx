import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    question: "I ___ from Indonesia.",
    options: ["am", "is", "are", "be"],
    correct: 0
  },
  {
    question: "She ___ to school every day.",
    options: ["go", "goes", "is", "going"],
    correct: 1
  },
  {
    question: "They ___ playing football right now.",
    options: ["am", "is", "are", "be"],
    correct: 2
  }
];

export default function MiniQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

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
  };

  return (
    <div className="relative z-10 w-full bg-white rounded-[40px] shadow-2xl p-8 border border-slate-100 min-h-[400px] flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-brand-blue">Test Your Level</h3>
          <p className="text-slate-400 font-medium mt-1">Quick 3-question quiz</p>
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
                {score === 3 ? "Excellent!" : score === 2 ? "Great job!" : "Keep practicing!"}
              </h4>
              <p className="text-slate-500">
                Based on your short test, we recommend checking out our {score === 3 ? "Advanced" : "Beginner to Intermediate"} courses.
              </p>
              <button
                onClick={restartQuiz}
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-brand-blue text-white rounded-2xl font-bold mt-4 hover:bg-brand-blue/90 transition-all shadow-lg hover:-translate-y-1"
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
