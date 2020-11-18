import styled from 'styled-components';

export const AnswerButton = styled.button`
  border: 5px solid
    ${(props) =>
      props.borderColor === 'black'
        ? 'black'
        : props.borderColor === 'green'
        ? 'green'
        : 'red'};
`;