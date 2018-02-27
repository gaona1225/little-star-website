/**
 * @file 官网新闻动态详情
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/layout/header.jsx';
import Banner from '../../components/layout/banner.jsx';
import Footer from '../../components/layout/footer.jsx';
import MainDetail from '../components/mainDetail.jsx';
import Loading from '../../components/layout/loading.jsx';

let detailData = null;
export default class NewsDetail extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'zhangsan',
            isGetList: false
        }
    }

    handleClick(e) {
        e.preventDefault(e);
    }

    componentWillMount() {
        axios.get('/getNewsDetail').then(res => {
            if (!res.data) {
                return;
            }
            let obj = res.data;
            if (obj.errInfo.no === '0') {
                detailData = obj.data;
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

    render() {
        const isGetList = this.state.isGetList;
        return (
            <div className = "goldStar-news">
                <Header />
                <Banner />
                {isGetList ? <MainDetail mainnewsdetail = {detailData} /> : <Loading />}
                <Footer />
            </div>
        )
    }
}