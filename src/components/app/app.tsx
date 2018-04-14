import * as React from 'react';
import grey from 'material-ui/colors/grey';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { Router } from 'components/router';

import './app.css';

interface AppComponentProps {
  classes: any;
}

const styles = {
  app: {
    background: grey[50],
    minHeight: '100vh',
  },
  title: {
    background: '#FFF',
    textAlign: 'center' as 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const AppComponent: React.SFC<AppComponentProps> = ({ classes }) => (
  <div className={classes.app}>
    <Typography className={classes.title} variant="display4">
      The Road to 50 States
    </Typography>
    <Router />
  </div>
);

AppComponent.displayName = 'App';

export const App = withStyles(styles)<{}>(AppComponent);
