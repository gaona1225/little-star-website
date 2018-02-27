/**
 * @file mainNews组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import './mainDetail.scss';

export default class MainDetail extends React.Component {
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
        const newsDetailData = this.props.mainnewsdetail;
        return (
            <div className = "goldStar-component-mainDetail">
                <h3>{newsDetailData.title}</h3>
                <h4>作者：{newsDetailData.author}   发布时间：{newsDetailData.time}   浏览：{newsDetailData.readerNum}</h4>
                <p>{newsDetailData.desc}</p>
                <Link to = "/reduxTest">reduxTest</Link>
            </div>
        )
    }
}