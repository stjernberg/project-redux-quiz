import React from 'react';
import { useSelector } from 'react-redux';
import { ResetButton } from './Buttons';
import styled from 'styled-components';

// Styling
import {
  SummaryOuterWrapper,
  BodyText,
  QuestionText,
  SummaryInnerWrapper,
} from '../styling/styling';

const SummaryText = styled(BodyText)`
  font-size: 12px;
  color: #000;
`;

const SummaryTextHighlighted = styled(SummaryText)`
  font-weight: 700;
  padding: 2px 0;
`;

const SummaryHeader = styled(QuestionText)`
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  text-align: left;
  max-width: 100%;
  width: auto;
  min-height: auto;
  text-shadow: none;
`;
// ----------------------------------------------------------------

export const Summary = ({ setWasCorrectAnswerSelected }) => {
  const answersArray = useSelector((state) => state.quiz.answers);
  const rightAnswersArray = answersArray.filter(
    (answer) => answer.isCorrect === true
  );

  return (
    <SummaryOuterWrapper>
      {answersArray.map((answer) => {
        return (
          <SummaryInnerWrapper key={answer.questionId}>
            <SummaryHeader>
              Question: {answer.question.questionText}
            </SummaryHeader>
            <SummaryTextHighlighted>
              Your answer: {answer.answer}
            </SummaryTextHighlighted>
            <SummaryText>
              Correct answer:{' '}
              {answer.question.options[answer.question.correctAnswerIndex]}
            </SummaryText>
          </SummaryInnerWrapper>
        );
      })}
      <p>
        Your score was: {rightAnswersArray.length} of {answersArray.length}
      </p>
      {
        <ResetButton
          title="Reset Quiz"
          setWasCorrectAnswerSelected={setWasCorrectAnswerSelected}
        />
      }
    </SummaryOuterWrapper>
  );
};
