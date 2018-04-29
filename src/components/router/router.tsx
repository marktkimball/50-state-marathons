import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Icon from 'material-ui/Icon';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Main } from 'components/main';
import { CommentForm } from 'components/comment-form';
import { JourneyMain } from 'components/journey';

interface RouterProps {
  history: any;
  location: any;
  match: any;
}

interface RouterState {
  value: number;
}

const FlightIcon = styled(Icon)`
  transform: rotate(90deg);
`;

class RouterComponent extends React.Component<RouterProps, RouterState> {
  static displayName = 'RouterComponent';

  routes = ['/', '/journey/CA', '/comment'];

  state = {
    value: 0,
  };

  componentWillMount() {
    const index = this.routes.indexOf(this.props.location.pathname);
    const value = index !== -1 ? index : 0;
    this.setState({
      value,
    });
  }

  handleChange = (_event: any, value: number) => {
    this.setState({ value });
    this.props.history.push(this.routes[value]);
  };

  render() {
    return (
      <>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Beginnings" icon={<Icon>home</Icon>} />
            <Tab label="The Journey" icon={<FlightIcon>flight</FlightIcon>} />
            <Tab label="Say Congrats" icon={<Icon>chat_bubble</Icon>} />
          </Tabs>
        </AppBar>
        <Route exact path="/" component={Main} />
        <Route path="/journey/:state" component={JourneyMain} />
        <Route exact path="/comment" component={CommentForm} />
      </>
    );
  }
}

export const Router = withRouter(RouterComponent);
