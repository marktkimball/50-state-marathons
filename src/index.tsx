import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Routes } from 'routes';
import { store } from 'store';
import { theme } from 'theme';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
