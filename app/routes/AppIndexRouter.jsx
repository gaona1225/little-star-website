/**
 * @file 官网首页路由配置
 * @author gaona
 */
import React from 'react';
// import PropTypes from 'prop-types';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from 'react-router-dom'

import IndexApp from '../home/containers/index.jsx';
import IndexTest from '../home/containers/indexTest.jsx';

const AppIndexRouter = (store) => {
    return (
      <Router>
          <div>
              <Switch>
                <Route path="/home" component={IndexApp}/>
                <Route path="/test" component={IndexTest}/>
                <Redirect from="/" to="/home" />
              </Switch>
          </div>
      </Router>
   )
}

export default AppIndexRouter