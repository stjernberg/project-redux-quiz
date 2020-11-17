import React from 'react';
import { useSelector } from 'react-redux';

import { Answer } from './Answer';

export const Question = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = question.options;
  const id = question.id;

  if (!question) {
    return <h1> Oh no!I could not find the current question! </h1>;
  }

  return (
    <>
      <h1> Question: {question.questionText} </h1>
      {answers.map((answer, index) => {
        return (
          <Answer key={index} answer={answer} index={index} questionId={id} />
        );
      })}
    </>
  );
};
