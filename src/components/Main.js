import React, { useState } from 'react';
import { Question } from './Question';
import { Button } from './Buttons';
import { useSelector } from 'react-redux';
import { Summary } from './Summary';
import { SubmitButton } from './Buttons';

// Styling
import { ButtonsWrapper } from '../styling/styling';

// ----------------------------------------------------------------

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
      <ButtonsWrapper>
        {!quizState &&
          (questionIndex === questions.length - 1 ? (
            <SubmitButton title="Submit" />
          ) : (
            <Button
              title="Next"
              wasCorrectAnswerSelected={wasCorrectAnswerSelected}
              setWasCorrectAnswerSelected={setWasCorrectAnswerSelected}
            />
          ))}
      </ButtonsWrapper>
      {quizState && (
        <Summary setWasCorrectAnswerSelected={setWasCorrectAnswerSelected} />
      )}
    </>
  );
};
