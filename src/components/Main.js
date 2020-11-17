import React from 'react';
import { useSelector } from 'react-redux';
import { Question } from './Question';
import { Answer } from './Answer';

export const Main = () => {

  return ( 
    <>
      <Question />
      <Answer />
    </>
  )
}