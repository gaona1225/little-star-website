
import React from 'react';
import ReactDOM from 'react-dom';
import AboutIndex from '../../about/containers/about.jsx';
import './about.scss';

let store = {
    name: 'gaona'
}

ReactDOM.render(
    <AboutIndex />,
    document.getElementById('goldStarAbout')
)