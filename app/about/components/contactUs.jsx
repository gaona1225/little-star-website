/**
 * @file 联系我们组件
 * @author gaona
 */
import React from 'react';
import axios from 'axios';
import './contactUs.scss';

let contactList = require('./contactUsList.json');

export default class ContactUs extends React.Component {
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
        let contactListDom = [];
        contactList.forEach((value, index) => {
            contactListDom.push(
                <dl key = {index}>
                    <dt>{value.name}</dt>
                    <dd className = "contactUs-address">地址：{value.address}</dd>
                    <dd className = "contactUs-tel">电话：{value.tel}</dd>
                </dl>
            );
        });
        return (
            <div className = "goldStar-component-contactUs">
                <h2>联系我们</h2>
                <div className = "goldStar-component-contactUs-main" id = "contactUsList">
                    {contactListDom}
                </div>
            </div>
        )
    }
}