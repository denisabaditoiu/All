import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
const routerHistory = createBrowserHistory();

 const RouteWithLayout = ({ Component, Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
  )

export default RouteWithLayout;