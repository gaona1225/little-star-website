
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = {
    name: 'gaona'
}

ReactDOM.render(
    <div>hi {store.name}, 欢迎来到goldStar-小金星幼儿园-列表页!<a href="/about">about</a></div>,
    document.getElementById('goldStarList')
)