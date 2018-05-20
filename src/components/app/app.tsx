import * as React from 'react';
import styled from 'styled-components';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import { Router } from 'components/router';

import './app.css';

const Container = styled.div`
  background: ${grey[50]};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  background: ${blue[500]};
  border-bottom: 0.2rem solid #fff;
  color: #fff;
  font-size: 7.2rem;
  font-style: italic;
  font-weight: 400;
  line-height: 14.4rem;
  margin: 0;
  text-align: center;
  z-index: 2;
`;

export const App: React.SFC<{}> = () => (
  <Container>
    <Title>The Road to 50 States</Title>
    <Router />
  </Container>
);

App.displayName = 'App';
