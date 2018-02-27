/**
 * @file 官网新闻路由配置
 * @author gaona
 */
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from 'react-router-dom'

import NewsIndex from '../news/containers/news.jsx';
import NewsList from '../news/containers/newsList.jsx';

const AppNewsRouter = (store) => {
    return (
      <Router>
          <div>
              <Switch>
                <Route path="/news" component={NewsIndex}/>
                <Route path="/newslist" component={NewsList}/>
                <Redirect from="/" to="/news" />
              </Switch>
          </div>
      </Router>
   )
}

export default AppNewsRouter