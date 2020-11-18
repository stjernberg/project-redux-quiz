import React, {useState} from 'react';

import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';


export const Button = ({ title }) => {
  // const [borderColor, setBorderColor] = useState('black');
  const dispatch = useDispatch();
  // const handleClick = () => {

  // }
  return (
    <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>{title}</button>
  )
}