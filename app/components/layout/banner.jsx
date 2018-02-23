/**
 * @file 广告banner组件
 * @author gaona
 */
import React from 'react';
import './banner.scss';
import $ from 'expose-loader?$!jquery';
import CHAT from './common/test.js';


export default class Banner extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            alt: '小金星国际教育集团'
        }
    }

    handleClick (e) {
        e.preventDefault();
        console.log('click');
    }

    componentDidMount () {
        console.log('componentDidMount');
        console.log($.fn.jquery);
        CHAT();
    }

    render() {
        return (
            <div className = "goldStar-component-banner">
                <ul onClick = {this.handleClick}>
                    <li>111</li>
                    <li>222</li>
                </ul>
            </div>
        )
    }
}