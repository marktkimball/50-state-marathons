import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import grey from '@material-ui/core/colors/grey';
import Slide from '@material-ui/core/Slide';
import { marathons } from 'app-constants';
import { State } from './';

interface JourneyProps extends RouteComponentProps<{}> {
  history: any;
  location: any;
  match: any;
}

interface JourneyState {
  atRestQuick: boolean;
  atRestSlow: boolean;
}

const JourneyContainer = styled.main`
  display: flex;
  flex: 1;
`;

const CounterSection = styled.section`
  display: ${(props: { displayOnLarge: boolean }) =>
    props.displayOnLarge ? 'none' : 'block'};
  @media (min-width: 769px) {
    background: #fff;
    color: ${grey[300]};
    display: ${(props: { displayOnLarge: boolean }) =>
      props.displayOnLarge ? 'block' : 'none'};
    flex: 1;
  }
`;

const Count = styled.h1`
  color: ${grey[300]};
  font-size: 10rem;
  margin: 8rem 3.2rem 4.8rem 0;
  text-align: right;
  @media (min-width: 769px) {
    margin: 12rem 5.6rem 0 0;
  }
`;

const MainSection = styled.section`
  background: ${grey[50]};
  width: 100%;
  @media (min-width: 769px) {
    flex: 3;
    width: initial;
  }
`;

class Journey extends React.Component<JourneyProps, JourneyState> {
  static displayName = 'JourneyMain';

  state = {
    atRestQuick: false,
    atRestSlow: false,
  };

  componentWillMount() {
    setTimeout(() => this.setState({ atRestQuick: true }), 100);
    setTimeout(() => this.setState({ atRestSlow: true }), 300);
  }

  transitionStates = (route: string) => {
    this.setState({ atRestQuick: false, atRestSlow: false }, () => {
      setTimeout(() => this.setState({ atRestQuick: true }), 100);
      setTimeout(() => this.setState({ atRestSlow: true }), 300);
    });
    this.props.history.push(route);
  };

  render() {
    const { atRestQuick, atRestSlow } = this.state;
    const { state } = this.props.match.params;
    const stateStats = marathons[state];

    return (
      <JourneyContainer>
        <CounterSection displayOnLarge>
          <Slide direction="down" in={atRestQuick} mountOnEnter unmountOnExit>
            <Count>{stateStats.count}</Count>
          </Slide>
        </CounterSection>
        <MainSection>
          <CounterSection displayOnLarge={false}>
            <Slide direction="down" in={atRestQuick} mountOnEnter unmountOnExit>
              <Count>{stateStats.count}</Count>
            </Slide>
          </CounterSection>
          <State
            code={state}
            handleStateSwitch={this.transitionStates}
            atRest={atRestSlow}
            stats={stateStats}
          />
        </MainSection>
      </JourneyContainer>
    );
  }
}

export const JourneyMain = withRouter(Journey);
