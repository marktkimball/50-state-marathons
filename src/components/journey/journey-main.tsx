import * as React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import { Typography } from 'material-ui';
import { State } from './';
import { withRouter } from 'react-router-dom';

interface JourneyProps {
  history: any;
  location: any;
  match: any;
}

const Container = styled(Paper)`
  padding: 3.2rem 1.6rem;
`;

class Journey extends React.Component<JourneyProps, {}> {
  static displayName = 'JourneyMain';

  render() {
    return (
      <Container>
        <Typography variant="title">The Journey</Typography>
        <State code={this.props.match.params.state} />
      </Container>
    );
  }
}

export const JourneyMain = withRouter(Journey);
