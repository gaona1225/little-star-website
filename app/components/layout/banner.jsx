/**
 * @file 广告banner组件
 * @author gaona
 */
import React from 'react';
import './banner.scss';
import $ from 'expose-loader?$!jquery';


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
    }

    componentDidMount () {
        console.log('componentDidMount');
        console.log($.fn.jquery);
    }

    render() {
        return (
            <div className = "goldStar-component-banner">
                <ul>
                    <li>111</li>
                    <li>222</li>
                </ul>
            </div>
        )
    }
}