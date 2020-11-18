import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { quiz } from '../reducers/quiz';

import { NavButton } from '../styling/styling';

export const Button = ({ title }) => {
  // const [borderColor, setBorderColor] = useState('black');
  const dispatch = useDispatch();
  // const handleClick = () => {

  // }
  return (
    <NavButton onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
      {title}
    </NavButton>
  );
};
