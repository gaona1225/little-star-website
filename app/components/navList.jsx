/**
 * @file header nav list组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class NavList extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        e.preventDefault();
        console.log('handleClick');
    }

    render() {
        let navItem = this.props.data;
        return (
            <li className = "goldStar-component-header-listElem">
                {navItem.isNewPage ?
                    <a href={navItem.href}>{navItem.text}<span>{navItem.desc}</span></a> :
                    <Link to={navItem.href}>{navItem.text}<span>{navItem.desc}</span></Link>}
            </li>
        )
    }
}