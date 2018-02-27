
import React from 'react';
import ReactDOM from 'react-dom';
import AppNewsRouter from '../../routes//NewsRouter.jsx';
import './list.scss';

let store = {
    name: 'gaona'
}

ReactDOM.render(
    <div>
        <AppNewsRouter />
    </div>,
    document.getElementById('goldStarNews')
)