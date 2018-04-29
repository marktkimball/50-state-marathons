import * as React from 'react';
import styled from 'styled-components';
import grey from 'material-ui/colors/grey';
import Typography from 'material-ui/Typography';
import { Router } from 'components/router';

import './app.css';

const Container = styled.div`
  background: ${grey[50]};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled(Typography)`
  background: #fff;
  text-align: center;
`;

export const App: React.SFC<{}> = () => (
  <Container>
    <Title variant="display4">The Road to 50 States</Title>
    <Router />
  </Container>
);

App.displayName = 'App';
