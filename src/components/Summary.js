import React from 'react';
import { useSelector } from 'react-redux';
import { ResetButton } from './Button';

export const Summary = ({setWasCorrectAnswerSelected}) => {
  const answersArray = useSelector((state) => state.quiz.answers);
  const rightAnswersArray = answersArray.filter(answer => answer.isCorrect === true);
  //console.log(answersArray);
  console.log(rightAnswersArray);

  return (
    <div>
      {answersArray.map(answer => {
        return (
          <div key={answer.questionId}> 
            <h3>Question: {answer.question.questionText}</h3>
            <p>
              User answer: {answer.answer}
            </p>
            <p>
              Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}
            </p>
          </div>
          )
        })}
        <p>
          Your score was: {rightAnswersArray.length} of {answersArray.length}
      </p>
      {<ResetButton title="Reset Quiz" setWasCorrectAnswerSelected={setWasCorrectAnswerSelected} />}
    </div>
  )
}

