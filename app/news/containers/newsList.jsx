/**
 * @file 官网新闻动态列表详情
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import Header from '../../components/layout/header.jsx';
import Banner from '../../components/layout/banner.jsx';
import Footer from '../../components/layout/footer.jsx';

export default class NewsList extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'zhangsan'
        }
    }

    handleClick(e) {
        e.preventDefault(e);
    }

    render() {
        return (
            <div className = "goldStar-news">
                <Header />
                <Banner />
                <Footer />
            </div>
        )
    }
}