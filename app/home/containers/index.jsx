/**
 * @file 官网首页路由配置
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import Header from '../../components/layout/header.jsx';
import Banner from '../../components/layout/banner.jsx';
import MainNav from '../../components/layout/mainNav.jsx';
import Footer from '../../components/layout/footer.jsx';

/*const name = 'zhangsan';
const IndexApp = (store) => {
    return (
        <div className = "goldStar-indexpage">
            `hi, 欢迎来到goldStar-小金星幼儿园-首页!---IndexApp{name}!`
            <p>
                <Link to="/test">to IndexTest Page</Link>
            </p>
        </div>
    )
}
export default IndexApp*/

export default class IndexApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'zhangsan'
        }
    }

    handleClick(e) {
        e.preventDefault(e);
        console.log('handleClick');
        fetch('/getRequest').then((res) => {
            if (res.ok) {
                let requestResultObj = document.getElementById('requestResult');
                res.json().then((obj) => {
                    console.log('res ok');
                    console.log(obj.errInfo.no);
                    if (obj.errInfo.no === '0') {
                        console.log('成功');
                        requestResultObj.innerHTML = `请求成功,请求返回errorNo是${obj.errInfo.no}`;
                    } else {
                        console.log(obj.errInfo.msg);
                        requestResultObj.innerHTML = `请求成功,,请求返回errorNo是${obj.errInfo.no},请求返回信息是${obj.errInfo.msg}`;
                    }
                });
            }
        }, (ex) => {
            console.log(ex);
        });
    }


    render() {
        return (
            <div className = "goldStar-indexpage">
                <Header />
                <Banner />
                <MainNav />
                hi {this.state.name}, 欢迎来到goldStar-小金星幼儿园-首页!---IndexApp!
                <p onClick = {this.handleClick}>
                    点击我--发起请求
                </p>
                <p id="requestResult" className="goldStar-request-msg"></p>
                <p>
                    <Link to="/test">to IndexTest Page</Link>
                </p>
                <Footer />
            </div>
        )
    }
}