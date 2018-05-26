import * as React from 'react';
import styled from 'styled-components';
import grey from '@material-ui/core/colors/grey';
import { Router } from 'components/router';

import './app.css';

const Container = styled.div`
  background: ${grey[50]};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

const Title = styled.h1`
  color: ${grey[800]};
  font-size: 7.2rem;
  font-style: italic;
  line-height: 7.2rem;
  margin: 0 1.6rem;
  padding: 2.4rem 0;
  text-align: center;
`;

export const App: React.SFC<{}> = () => (
  <Container>
    <TitleContainer>
      <Title>The Road to 50 States</Title>
    </TitleContainer>
    <Router />
  </Container>
);

App.displayName = 'App';
