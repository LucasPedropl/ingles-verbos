import { useState } from 'react';
import { quizData } from '../../data/quiz';
import { Button } from '../ui/Button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quizData[currentIndex];

  const handleAnswerClick = (option: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (showResults) {
    const percentage = Math.round((score / quizData.length) * 100);
    return (
      <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Finalizado!</h2>
        <div className="w-32 h-32 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl font-bold text-blue-600">{percentage}%</span>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          Você acertou <strong className="text-gray-900">{score}</strong> de <strong className="text-gray-900">{quizData.length}</strong> questões.
        </p>
        <Button onClick={restartQuiz} size="lg" className="gap-2">
          <RotateCcw className="w-5 h-5" />
          Tentar Novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Quiz Interativo</h2>
        <p className="text-gray-500 mt-2">
          Teste seus conhecimentos sobre tempos verbais e reported speech.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Questão {currentIndex + 1} de {quizData.length}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
            {currentQuestion.type === 'identify' ? 'Identificação' : 'Conversão'}
          </span>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-medium text-gray-900 mb-8">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              let buttonClass = "w-full text-left px-6 py-4 rounded-xl border-2 transition-all ";
              
              if (!isAnswered) {
                buttonClass += "border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700";
              } else {
                if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 opacity-50 text-gray-500";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerClick(option)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-8 flex justify-end">
              <Button onClick={handleNextQuestion}>
                {currentIndex + 1 === quizData.length ? 'Ver Resultados' : 'Próxima Questão'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
