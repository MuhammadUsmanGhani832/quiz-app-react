import questions from "./contant/questions.json";
import "./App.css";
import { useState } from "react";
import Question from "./components/question";
import Result from "./components/result";

function App() {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestions(currentQuestions+1);
    setUserAnswers([...userAnswers,isCorrect])
  };

const resetQuiz=()=>{
  setCurrentQuestions(0);
  setUserAnswers([])
}

  return (
    <div className="app">
      <h1>Quiz app</h1>
      {/* question component */}
      {currentQuestions < questions.length && (
        <Question
          question={questions[currentQuestions]}
          userClickAnswer={handleNextQuestion}
        />
      )}

      {currentQuestions === questions.length && (
        <Result
          userAnswers={userAnswers}
          resetQuiz={resetQuiz}
          questions={questions}
        />
      )}
    </div>
  );
}

export default App;
