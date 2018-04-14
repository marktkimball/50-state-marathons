import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'containers/app';

export const Routes: React.SFC<{}> = () => (
  <BrowserRouter>
    <Route path="/" component={AppContainer} />
  </BrowserRouter>
);
