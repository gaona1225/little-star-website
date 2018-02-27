/**
 * @file mainNews组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import './mainNews.scss';
import NewsCard from './newsCard.jsx';
import Loading from '../../components/layout/loading.jsx';

let newsCardList = [];

export default class MainNews extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            alt: '小金星国际教育集团',
            isGetList: false
        }
    }

    handleClick (e) {
        e.preventDefault();
    }

    componentWillMount() {
        axios.get('/getRequest').then(res => {
            if (!res.data) {
                return;
            }
            let obj = res.data;
            if (obj.errInfo.no === '0') {
                newsCardList = obj.data.newsCardList;
                this.setState({
                    isGetList: true
                });
            } else {
                console.log(obj.errInfo.msg);
                console.log(`请求成功,请求返回errorNo是${obj.errInfo.no},请求返回信息是${obj.errInfo.msg}`);
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }

    componentDidMount () {
        
    }

    render() {
        let NewsCardDom = [];
        const isGetList = this.state.isGetList;
        if (isGetList) {
            newsCardList.map((value, index) => {
                NewsCardDom.push(<NewsCard key = {index} newsCardList = {value} />);
            });
        }
        return (
            <div className = "goldStar-component-mainNews">
                <div className = "component-mainNews-title">
                    <h3>
                        小金星动态
                        <p>Little Star News</p>
                    </h3>
                    <Link to ='/newslist' className = "goldStar-component-moreNews">更多新闻</Link>
                </div>
                <div className = "component-mainNews-list">
                    <img src = {require('../../common/image/upload/newsBanner.jpg')} alt = "newsBanner" />
                    <dl>
                        <dt>【不忘初心•幸福奋斗】小金星国际教育集团福州地区年终工作总结暨表彰大会圆满成功！</dt>
                        <dd>【不忘初心•幸福奋斗】小金星国际教育集团福州地区年终工作总结暨表彰大会圆满成功！</dd>
                        <dd className = "abo">2018-01-29</dd>
                    </dl>
                </div>
                <div className = "component-mainNews-banner">
                    {isGetList ? NewsCardDom : <Loading />}
                </div>
                <div className = "component-mainNews-views">
                    <img src = {require('../../common/image/upload/newsview.jpg')} alt = "newsview" />
                    <dl>
                        <dt>【加强卫生消毒管理 促进幼儿健康成长 】小金星国际幼儿园秋季卫生消毒进行时</dt>
                        <dd>在幼儿园里，关心和注重每一位幼儿的健康成长是我们的首要职责。</dd>
                        <dd className = "abo">2017-10-31</dd>
                    </dl>
                </div>
            </div>
        )
    }
}