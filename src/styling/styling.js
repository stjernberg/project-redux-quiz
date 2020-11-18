import styled from 'styled-components';

// GENERAL -----------------------------------------------
export const BodyText = styled.p`
  font-size: 16px;
  margin: 2px;
  color: #fff;
`;

// HEADER -----------------------------------------------
export const LogoImg = styled.img`
  width: 70px;
  margin-right: 20px;
`;

// QUESTION -----------------------------------------------
export const QuestionText = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #fff;
  max-width: 70%;
  margin: 30px auto;
  min-height: 50px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

// ANSWER -----------------------------------------------
export const AnswerButton = styled.button`
  border: 5px solid
    ${(props) =>
      props.borderColor === 'black'
        ? 'transparent'
        : props.borderColor === 'green'
        ? '#006B31'
        : '#6B0000'};
  width: calc(50% - 20px);
  padding: 20px;
  margin: 10px;
  font-family: 'Lora';
  box-shadow: 2px 2px 10px
    ${(props) =>
      props.borderColor === 'black'
        ? 'rgba(255, 255, 255, .2)'
        : props.borderColor === 'green'
        ? '#006B31'
        : '#6B0000'};
  outline: none;
  &:hover {
    background: #d8d8d8;
    cursor: pointer;
    }
  }
`;

export const AnswersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// BUTTONS -----------------------------------------------
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NavButton = styled(AnswerButton)`
  border: none;
  box-shadow: none;
  z-index: 2;
`;

export const Counter = styled(BodyText)`
  text-align: center;
  margin-top: 15px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
`;

// SUMMARY -----------------------------------------------
export const SummaryOuterWrapper = styled.div`
  background: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

export const SummaryInnerWrapper = styled.div`
  background: #fff;
  padding: 10px;
  width: 100%;
`;

// FOOTER -----------------------------------------------
export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
`;
