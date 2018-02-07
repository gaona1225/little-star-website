/**
 * @file 官网首页路由配置
 * @author gaona
 */
import React from 'react';
// import PropTypes from 'prop-types';
// import { Switch, Router, Route } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import IndexApp from '../home/containers/index.jsx';
import IndexTest from '../home/containers/indexTest.jsx';

const AppIndexRouter = (store) => {
    return (
        // <div>
//             <Router>
//                 <Route path="/" component={IndexApp}/>
//             </Router>
//             <Router>
//                 <Route path="/test" component={IndexTest}/>
//             </Router>
//         </div>

            <Router>
                <div>
                    <Route path="/" component={IndexApp}/>
                    <Route path="/test" component={IndexTest}/>
                </div>
            </Router>
    )
}

export default AppIndexRouter