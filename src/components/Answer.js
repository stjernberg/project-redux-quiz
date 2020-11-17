import React from 'react';

import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const Answer = ({ answer, index, questionId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            quiz.actions.submitAnswer({
              questionId: questionId,
              answerIndex: index,
            })
          )
        }
      >
        {answer}
      </button>
    </div>
  );
};


