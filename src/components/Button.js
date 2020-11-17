import React from 'react';

import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';


export const Button = ({title}) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>{title}</button>
  )
}