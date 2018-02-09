/**
 * @file header组件
 * @author gaona
 */
import React from 'react';
import NavList from './navList.jsx';
import './header.scss';

let navListDatas = require('./nav.json');

export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            alt: '小金星国际教育集团',
            showNavList: false
        }
    }

    handleClick (e) {
        e.preventDefault();
        this.setState ({
            showNavList: !this.state.showNavList
        })
    }

    render() {
        let navList = [];

        navListDatas.forEach((value, index) => {
            navList.push(<NavList key = {index} data = {value} />);
        });

        return (
            <header className = "goldStar-component-header">
                <p className = "goldStar-component-header-logo">
                    <span alt={this.state.alt} title={this.state.alt} className = "goldStar-component-header-logo-img"></span>
                </p>
                <nav className = "goldStar-component-header-nav" onClick={this.handleClick}></nav>
                <ul className = {`goldStar-component-header-list${this.state.showNavList ? ' showList' : ''}`}>
                    {navList}
                </ul>
            </header>
        )
    }
}