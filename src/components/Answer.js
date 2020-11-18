import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { quiz } from '../reducers/quiz';
import styled from 'styled-components';
import { AnswerButton } from '../styling/styling';

export const Answer = ({ answer, answerIndex, questionId, correctAnswer, border, isCorrectAnswer, setCorrectAnswer }) => {
  const [borderColor, setBorderColor] = useState(border);
  const dispatch = useDispatch();


  useEffect(() => {
        setBorderColor('black')
  }, [questionId])

  // Triggers when user clicks an answer
  useEffect(() => {
   
    // If correctAnswer is false...
    if (isCorrectAnswer === false) {
      // find correct answer and set to green
      if (answerIndex === correctAnswer) {
        setBorderColor('green')
      }
    }
  })

  const onAnswerSelect = () => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: questionId,
        answerIndex: answerIndex,
      })
    );

    if (answerIndex === correctAnswer) {
      // If right answer is clicked, Correct answer is set to true and useEffect is triggered
      setCorrectAnswer(true);
      setBorderColor('green');
    } else {
      // If wrong answer is clicked, Correct answer is set to true and useEffect is triggered
      setCorrectAnswer(false);
      setBorderColor('red');
    }
  };

  return (
    <div>
      <AnswerButton borderColor={borderColor} onClick={onAnswerSelect}>
        {answer}
      </AnswerButton>
    </div>
  );
};


