import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { quiz } from 'reducers/quiz';

import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { Footer } from 'components/Footer';

const Wrapper = styled.main`
  padding: 40px 50px;
  background-image: url(../images/rithika-gopalakrishnan-JK0l2xvN1fY-unsplash.jpg);
  background-size: cover;
  min-height: 100%;
  position: relative;
`;

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </Provider>
  );
};
