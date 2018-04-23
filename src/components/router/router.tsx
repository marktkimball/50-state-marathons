import * as React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Icon from 'material-ui/Icon';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Main } from 'components/main';
import { CommentForm } from 'components/comment-form';

interface RouterState {
  value: number;
}

const FlightIcon = styled(Icon)`
  transform: rotate(90deg);
`;

const StyledMain = styled.main`
  padding: 0.8rem;

  @media (min-width: 769px) {
    padding: 10rem;
  }
`;

export class Router extends React.Component<{}, RouterState> {
  static displayName = 'Router';

  state = {
    value: 0,
  };

  handleChange = (_event: any, value: number) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Beginnings" icon={<Icon>home</Icon>} />
            <Tab label="The Journey" icon={<FlightIcon>flight</FlightIcon>} />
            <Tab label="Say Congrats" icon={<Icon>chat_bubble</Icon>} />
          </Tabs>
        </AppBar>
        <StyledMain>
          {value === 0 && <Main />}
          {value === 1 && <h1>The Journey</h1>}
          {value === 2 && <CommentForm />}
        </StyledMain>
      </>
    );
  }
}
