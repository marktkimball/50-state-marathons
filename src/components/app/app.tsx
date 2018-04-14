import * as React from 'react';
import { Route, Switch } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { MainContainer } from 'containers/main';

import './app.css';

interface AppComponentProps {
  classes: any;
}

const styles = {
  title: {
    color: '#FFF',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const AppComponent: React.SFC<AppComponentProps> = ({ classes }) => (
  <div>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="title">
          The Road to 50 States
        </Typography>
        <Button color="secondary" variant="raised">
          Say Congrats
        </Button>
      </Toolbar>
    </AppBar>
    <Switch>
      <Route exact path="/main" component={MainContainer} />
    </Switch>
  </div>
);

AppComponent.displayName = 'App';

export const App = withStyles(styles)(AppComponent);
