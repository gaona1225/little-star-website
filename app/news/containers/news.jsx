/**
 * @file 官网新闻动态
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class NewsIndex extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'zhangsan'
        }
    }

    handleClick(e) {
        e.preventDefault(e);
    }


    render() {
        return (
            <div className = "goldStar-news">
                news
            </div>
        )
    }
}