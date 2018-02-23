
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = {
    name: 'gaona'
}

ReactDOM.render(
    <div>hi {store.name}, 欢迎来到goldStar-小金星幼儿园-关于页!</div>,
    document.getElementById('goldStarAbout')
)