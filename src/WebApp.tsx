import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './page/HomePage';
import {RouteName} from './navigation';
import DetailPage from './page/DetailPage';
const WebApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={'/'}
          render={props => {
            // @ts-ignore
            return <HomePage {...props} />;
          }}
        />
        <Route
          exact
          path={`/${RouteName.DetailPage}`}
          render={props => {
            // @ts-ignore
            return <DetailPage {...props} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default WebApp;
