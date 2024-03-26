/* eslint-disable react/prop-types */
import './questions.css'

const Question = ({question,userClickAnswer}) => {
    
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul className='options'>
        {question.answerOptions.map((item) => {
          return (
            <li key={item.text}>
              <button onClick={() => userClickAnswer(item.isCorrect)}>
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question