import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { quiz } from '../reducers/quiz';
import styled from 'styled-components';

export const Answer = ({ answer, index, questionId }) => {
  const dispatch = useDispatch();

  const answerValue = useSelector(
    (state) => state.quiz.answers
  );

  const onNext = () => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: questionId,
        answerIndex: index,
      }));
    if (answerValue.length > 0) {
      console.log('I EXIST')
      console.log(answerValue)
    } else {
      console.log('NO')
    }
    checkAnswer();
  }
  const checkAnswer = (index) => {
    console.log(answerValue)
    
    // if (answerValue[questionId - 1].isCorrect) {
    //    console.log ('correct')
    // }
  }
  return (
    <div>
      <AnswerButton 
        onClick={() => onNext()}
      >
        {answer}
      </AnswerButton>

    </div>


  );
};

const AnswerButton = styled.button`
background-color: red
`;


