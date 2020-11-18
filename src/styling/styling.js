import styled from 'styled-components';

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
`;

// ANSWER -----------------------------------------------
export const AnswerButton = styled.button`
  border: 3px solid
    ${(props) =>
      props.borderColor === 'black'
        ? 'black'
        : props.borderColor === 'green'
        ? 'green'
        : 'red'};
  width: calc(50% - 20px);
  padding: 20px;
  margin: 10px;
  font-family: 'Lora';
`;

export const AnswersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// ANSWER -----------------------------------------------
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavButton = styled(AnswerButton)`
  border: none;
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
