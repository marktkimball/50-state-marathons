import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import { MainContainer } from 'containers/main';

interface RouterProps {
  classes: any;
}

interface RouterState {
  value: number;
}

const styles = {
  flightIcon: {
    transform: 'rotate(90deg)',
  },
  main: {
    padding: '10rem',
  },
};

export class RouterComponent extends React.Component<RouterProps, RouterState> {
  state = {
    value: 0,
  };

  handleChange = (_event: any, value: number) => this.setState({ value });

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Beginnings" icon={<Icon>home</Icon>} />
            <Tab
              label="The Journey"
              icon={<Icon className={classes.flightIcon}>flight</Icon>}
            />
            <Tab label="Say Congrats" icon={<Icon>chat_bubble</Icon>} />
          </Tabs>
        </AppBar>
        <main className={classes.main}>
          {value === 0 && <MainContainer />}
          {value === 1 && <h1>The Journey</h1>}
          {value === 2 && <h1>Say Congrats</h1>}
        </main>
      </>
    );
  }
}

export const Router = withStyles(styles)<{}>(RouterComponent);
