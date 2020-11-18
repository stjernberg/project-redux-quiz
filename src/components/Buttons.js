import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

// Styling
import { NavButton } from '../styling/styling';

// ----------------------------------------------------------------

export const Button = ({ title, setWasCorrectAnswerSelected }) => {
  // const [borderColor, setBorderColor] = useState('black');
  const dispatch = useDispatch();
  // const handleClick = () => {

  // }
  return (
    <NavButton
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion());
        setWasCorrectAnswerSelected(null);
      }}
    >
      {title}
    </NavButton>
  );
};

export const SubmitButton = ({ title }) => {
  // const [borderColor, setBorderColor] = useState('black');
  const dispatch = useDispatch();
  // const handleClick = () => {

  // }
  return (
    <NavButton
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion());
      }}
    >
      {title}
    </NavButton>
  );
};

export const ResetButton = ({ title, setWasCorrectAnswerSelected }) => {
  const dispatch = useDispatch();

  return (
    <NavButton
      onClick={() => {
        dispatch(quiz.actions.restart());
        setWasCorrectAnswerSelected(null);
      }}
    >
      {title}
    </NavButton>
  );
};
