import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppContainer } from 'containers/app';

export const Routes: React.SFC<{}> = () => (
  <BrowserRouter>
    <Route path="/" component={AppContainer} />
  </BrowserRouter>
);
