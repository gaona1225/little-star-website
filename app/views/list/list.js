
import React from 'react';
import ReactDOM from 'react-dom';
import NewsIndex from '../../news/containers/news.jsx';
import './list.scss';

let store = {
    name: 'gaona'
}

ReactDOM.render(
    <div>
        <NewsIndex />
    </div>,
    document.getElementById('goldStarNews')
)