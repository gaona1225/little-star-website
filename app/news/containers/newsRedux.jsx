/**
 * @file newsRedux组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class newsRedux extends React.Component {
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
            <div className = "goldStar-component-newsRedux">
                <h3>title-newsRedux</h3>
                <p>desc-newsReduxnewsReduxnewsReduxnewsRedux</p>
            </div>
        )
    }
}