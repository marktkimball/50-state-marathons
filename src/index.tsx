import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { store } from 'store';
import { theme } from 'theme';
import { AppContainer } from 'containers/app';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
