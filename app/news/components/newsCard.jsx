/**
 * @file mainNews组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import './newsCard.scss';


export default class NewsCard extends React.Component {
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
        let cardItem = this.props.newsCardList;
        return (
            <div className = "goldStar-component-newsCard">
                <img src = {require(`../../common/image/upload/${cardItem.img}`)} alt = {cardItem.img} />
                <dl>
                    <dt>{cardItem.title}</dt>
                    <dd>{cardItem.desc}</dd>
                    <dd>{cardItem.time}</dd>
                </dl>
            </div>
        )
    }
}