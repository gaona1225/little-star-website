/**
 * @file footer组件
 * @author gaona
 */
import React from 'react';
import './footer.scss';

export default class Header extends React.Component {
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
            <footer className = "goldStar-component-footer">       
                <p>版权所有 © 小金星国际教育集团 All Rights Reserved. 闽ICP备05018002号</p>
            </footer>
        )
    }
}