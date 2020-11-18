import React, { useState } from 'react';
import { Question } from './Question';
import { Button } from './Button';
import { useSelector } from 'react-redux';
import { Summary } from './Summary';
import { SubmitButton } from './Button';

export const Main = () => {
  const quizState = useSelector((state) => state.quiz.quizOver);
  const [wasCorrectAnswerSelected, setWasCorrectAnswerSelected] = useState(
    null
  );

  // Fetches questions array
  const questions = useSelector((state) => state.quiz.questions);

  // Fetches index of current question
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);

  return (
    <>
      {!quizState && (
        <Question
          wasCorrectAnswerSelected={wasCorrectAnswerSelected}
          setWasCorrectAnswerSelected={setWasCorrectAnswerSelected}
        />
      )}
      {/* Compares index and length of array to check if it is the last question, if true show submit */}
      {!quizState && (questionIndex === questions.length - 1 ? (
        <SubmitButton title="Submit" />
      ) : (
        <Button
          title="Next"
          wasCorrectAnswerSelected={wasCorrectAnswerSelected}
          setWasCorrectAnswerSelected={setWasCorrectAnswerSelected}
        />
      ))}
      {quizState && <Summary setWasCorrectAnswerSelected={setWasCorrectAnswerSelected} />}
    </>
  );
};
