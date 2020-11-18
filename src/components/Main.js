import React from 'react';
import { Question } from './Question';
import { Button } from './Button';
import { useSelector } from 'react-redux';
import { Summary } from './Summary';


export const Main = () => {

const quizState = useSelector(state=>state.quiz.quizOver)

  // Fetches questions array
  const questions = useSelector(
    (state) => state.quiz.questions
  );
  
  // Fetches index of current question
  const questionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  
  return (
    <>
      {!quizState && <Question />}
      {/* Compares index and length of array to check if it is the last question, if true show submit */}
      {questionIndex === questions.length - 1 ? <Button title="Submit" /> : <Button title="Next" />} 
      {quizState && <Summary />}
    </>
  );
};
