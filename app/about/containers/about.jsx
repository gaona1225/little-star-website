/**
 * @file 官网关于我们
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class AboutIndex extends React.Component {
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
            <div className = "goldStar-about">
                about
            </div>
        )
    }
}