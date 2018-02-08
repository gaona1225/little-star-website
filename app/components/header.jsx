/**
 * @file header组件
 * @author gaona
 */
import React from 'react';
import './header.scss';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <header className = "goldStar-component-header">
                <p className = "goldStar-component-logo">
                    logo
                </p>
                <nav className = "goldStar-component-nav">
                    nav
                </nav>
            </header>
        )
    }
}