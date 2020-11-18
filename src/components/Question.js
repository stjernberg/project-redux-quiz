import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Answer } from './Answer';

// Styling
import { QuestionText, AnswersWrapper } from '../styling/styling';

// ----------------------------------------------------------------

export const Question = ({
  wasCorrectAnswerSelected,
  setWasCorrectAnswerSelected,
}) => {
  // state to check if user selected the right answer
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = question.options;
  const id = question.id;
  const correctAnswer = question.correctAnswerIndex;

  if (!question) {
    return <h1> Oh no!I could not find the current question! </h1>;
  }

  return (
    <>
      <QuestionText> Question: {question.questionText} </QuestionText>
      <AnswersWrapper>
        {answers.map((answer, answerIndex) => {
          return (
            <Answer
              key={answerIndex}
              answer={answer}
              answerIndex={answerIndex}
              questionId={id}
              correctAnswer={correctAnswer}
              border="black"
              isCorrectAnswer={wasCorrectAnswerSelected}
              setCorrectAnswer={setWasCorrectAnswerSelected}
            />
          );
        })}
      </AnswersWrapper>
    </>
  );
};
