import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const Button = ({
  title,
  wasCorrectAnswerSelected,
  setWasCorrectAnswerSelected,
}) => {
  // const [borderColor, setBorderColor] = useState('black');
  const dispatch = useDispatch();
  // const handleClick = () => {

  // }
  return (
    <button
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion());
        setWasCorrectAnswerSelected(null);
      }}
    >
      {title}
    </button>
  );
};

export const SubmitButton = ({
  title,
  wasCorrectAnswerSelected,
  setWasCorrectAnswerSelected,
}) => {
  // const [borderColor, setBorderColor] = useState('black');
  const dispatch = useDispatch();
  // const handleClick = () => {

  // }
  return (
    <button
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion());
      }}
    >
      {title}
    </button>
  );
};

export const ResetButton = ({title, setWasCorrectAnswerSelected}) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(quiz.actions.restart());
        setWasCorrectAnswerSelected(null);
        
      }}
    >
      {title}
    </button>
  );
};

