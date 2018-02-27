/**
 * @file loading组件
 * @author gaona
 */
import React from 'react';
import './loading.scss';

export default class Loading extends React.Component {
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
            <div className = "goldStar-component-loading">       
                loading...
            </div>
        )
    }
}