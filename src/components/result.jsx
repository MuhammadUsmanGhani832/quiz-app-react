/* eslint-disable react/prop-types */
import './questions.css'

const Result = ({userAnswers,resetQuiz,questions}) => {

    const correctAnswer= userAnswers.filter((answer)=>answer).length;
  return (
    <div className="results">
        <h2>Result</h2>
        <p>you have answered {correctAnswer} out of {questions.length} questions</p>
        <span onClick={resetQuiz} style={{cursor:"pointer"}}>click here to retry</span>
        <ul>
            {questions.map((question,index)=>{
                return(
                    <li key={index} data-check={userAnswers[index]}>
                        Q{index+1}. {question.question}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Result