/**
 * @file mainNav组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import './mainNav.scss';

export default class MainNav extends React.Component {
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
                <div className = "goldStar-component-mainNav">
                    <a href = "javascript:;" className = "goldStar-component-mainNav-list">
                        <dl>
                            <dt className = "dt-list-cz">
                                <img src = {require('../../common/image/mainNav/y1-2.png')} />
                            </dt>
                            <dd>成长之路</dd>
                        </dl>
                    </a>
                    <a href = "/about" className = "goldStar-component-mainNav-list">
                        <dl>
                            <dt className = "dt-list-xy">
                                <img src = {require('../../common/image/mainNav/y2-2.png')} />
                            </dt>
                            <dd>星语心愿</dd>
                        </dl>
                    </a>
                    <a href = "/about" className = "goldStar-component-mainNav-list">
                        <dl>
                            <dt className = "dt-list-xz">
                                <img src = {require('../../common/image/mainNav/y3-2.png')} />
                            </dt>
                            <dd>校园招聘</dd>
                        </dl>
                    </a>
                    <a href = "/about" className = "goldStar-component-mainNav-list">
                        <dl>
                            <dt className = "dt-list-sh">
                                <img src = {require('../../common/image/mainNav/y4-2.png')} />
                            </dt>
                            <dd>社会招聘</dd>
                        </dl>
                    </a>
                </div>
            </div>
        )
    }
}