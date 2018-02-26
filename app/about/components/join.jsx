/**
 * @file 加入我们组件
 * @author gaona
 */
import React from 'react';
import MainNav from './mainNav.jsx';
import './join.scss';

export default class Join extends React.Component {
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
            <div className = "goldStar-component-join">
                <h3>加入小金星，有爱有事业</h3>
                <h6>Join Little Star, Love and Career</h6>
                <p>年轻赋予我们激情，我们把执着与热忱挥洒在这片热土上；爱让这个世界不停旋转,我们将用自己的实际工作来谱写感恩的篇章！</p>
                <MainNav />
            </div>
        )
    }
}