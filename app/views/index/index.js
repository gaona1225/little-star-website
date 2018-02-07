
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppIndexRouter from '../../routes/AppIndexRouter.jsx'
import './index.scss';

let store = {
    name: 'gaona'
}

//let store = createStore();

/*ReactDOM.render(
    <div className = "goldStar-indexpage">hi {store.name}, 欢迎来到goldStar-小金星幼儿园-首页!</div>,
    document.getElementById('goldStarIndex')
)*/

ReactDOM.render(
    /*<Provider store = { store }>
        <AppIndexRouter/>
    </Provider>,*/
    <div>
        <AppIndexRouter store = { store }/>
    </div>,
    document.getElementById('goldStarIndex')
)