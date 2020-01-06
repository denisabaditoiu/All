import React, { Component } from 'react';
import './App.css';
/***
 * Import the required classes from react-router-dom
 * @asset BrowserRouter - Component used as a container for rendering different routes
 * @asset Switch - Component that will analize each route path and load the specific component.
 * * NOTE * - Switch will load the first component that matches a path.
*/
import { BrowserRouter as Router, Switch } from 'react-router-dom';

/***
 * Helper component used to render different layouts of the application.
*/

import CustomRoute from './components/custom-route/CustomRoute';
import MainLayout from './components/layouts/MainLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

/***
 * Components that will be loaded on a specific path.
*/
import About from './components/about/About';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/dashboard/Products';

class App extends Component {

  render() {
    return (
      <div>
      <Router>
          <Switch>
            <CustomRoute path={"/dashboard/products"} Layout={DashboardLayout} Component={Products} />
            <CustomRoute path={"/dashboard"} Layout={DashboardLayout} Component={Dashboard} />
            <CustomRoute path="/about" Layout={MainLayout} Component={About} />
            <CustomRoute exact path="/" Layout={MainLayout} Component={Home} />
          </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
