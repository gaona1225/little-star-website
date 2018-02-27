/**
 * @file newsListItem组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/layout/loading.jsx';
import './newsCard.scss';

export default class NewsListItem extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            alt: '小金星国际教育集团'
        }
    }

    handleClick (e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Link to = '/newsDetail' className = 'component-newsItem-Elem'><span className="component-newsItem-main">111</span><span>2018-02-07</span></Link>
            </div>
        )
    }
}