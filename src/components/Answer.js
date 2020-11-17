import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

import { quiz } from '../reducers/quiz';
import styled from 'styled-components';

export const Answer = ({ answer, index, questionId, correctAnswer }) => {
  const [borderColor, setBorderColor] = useState('black');
  const dispatch = useDispatch();
  // let borderColor = 'white';

  // const answerValue = useSelector((state) => state.quiz.answers);

  const onAnswerSelect = () => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: questionId,
        answerIndex: index,
      })
    );

    if (index === correctAnswer) {
      setBorderColor('green');
    } else {
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

const AnswerButton = styled.button`
  border: 5px solid
    ${(props) =>
      props.borderColor === 'black'
        ? 'black'
        : props.borderColor === 'green'
        ? 'green'
        : 'red'};
`;
