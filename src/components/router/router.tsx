import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Main } from 'components/main';
import { CommentForm } from 'components/comment-form';
import { FansMain } from 'components/fans';
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

  routes = ['/', '/journey/CA', '/comment', '/fans'];

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
            <Tab label="His Beginnings" icon={<Icon>home</Icon>} />
            <Tab label="His Journey" icon={<FlightIcon>flight</FlightIcon>} />
            <Tab label="Say Congrats" icon={<Icon>chat_bubble</Icon>} />
            <Tab label="His Fans" icon={<Icon>cake</Icon>} />
          </Tabs>
        </AppBar>
        <Route exact path="/" component={Main} />
        <Route path="/journey/:state" component={JourneyMain} />
        <Route exact path="/comment" component={CommentForm} />
        <Route exact path="/fans" component={FansMain} />
      </>
    );
  }
}

export const Router = withRouter(RouterComponent);
