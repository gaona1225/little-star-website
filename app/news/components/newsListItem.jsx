/**
 * @file newsListItem组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class NewsListItem extends React.Component {
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
        const newsDataList = this.props.newsDataList;
        let linkEle = null;
        linkEle = newsDataList.map((item, key) => {
            return (
                <Link key = {key} to = '/newsDetail' className = 'component-newsItem-Elem'>
                    <span className="component-newsItem-main">{item.title}</span>
                    <span>{item.time}</span>
                </Link>
            )
        });
        return (
            <div>
                {linkEle}
            </div>
        )
    }
}