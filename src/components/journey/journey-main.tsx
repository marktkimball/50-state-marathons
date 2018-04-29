import * as React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import grey from 'material-ui/colors/grey';
import { marathons } from 'app-constants';
import { State } from './';

interface JourneyProps {
  history: any;
  location: any;
  match: any;
}

const JourneyContainer = styled.main`
  display: flex;
  flex: 1;
`;

const CounterSection = styled.section`
  background: #fff;
  color: ${grey[300]};

  flex: 1;
`;

const Count = styled.h1`
  color: ${grey[300]};
  font-size: 10rem;
  margin: 12rem 5.6rem 0 0;
  text-align: right;
`;

const MainSection = styled.section`
  background: ${grey[50]};
  flex: 3;
`;

class Journey extends React.Component<JourneyProps, {}> {
  static displayName = 'JourneyMain';

  render() {
    const { state } = this.props.match.params;
    const stateStats = marathons[state];

    return (
      <JourneyContainer>
        <CounterSection>
          <Count>{stateStats.count}</Count>
        </CounterSection>
        <MainSection>
          <State code={state} stats={stateStats} />
        </MainSection>
      </JourneyContainer>
    );
  }
}

export const JourneyMain = withRouter(Journey);
