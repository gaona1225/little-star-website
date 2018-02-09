/**
 * @file 官网首页路由配置
 * @author gaona
 */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


/*const IndexTest = (store) => {
    return (
        <div className = "goldStar-indexpage">
            hi , 欢迎来到goldStar-小金星幼儿园-首页--IndexTest!
        </div>
    )
}

export default IndexTest*/


export default class IndexTest extends React.Component {
    constructor (props) {
        super(props);
        this.handleClickList = this.handleClickList.bind(this);
        this.handleClickRequest = this.handleClickRequest.bind(this);
        this.state = {
            name: 'zhangsan'
        }
    }


    handleClickList (e) {
        e.preventDefault();
        console.log('handleClickList');
        location.replace('/list');
    }


    handleClickRequest (e) {
        e.preventDefault(e);
        console.log('handleClickRequest');
        // fetch es6默认请求，类似ajax 但是只有在最新版浏览器兼容,使用axios https://www.jianshu.com/p/df464b26ae58
        // fetch('/getRequest').then((res) => {
//                 if (res.ok) {
//                     let requestResultObj = document.getElementById('handleClickRequestTest');
//                     res.json().then((obj) => {
//                         console.log('res ok');
//                         console.log(obj.errInfo.no);
//                         if (obj.errInfo.no === '0') {
//                             console.log('成功');
//                             requestResultObj.innerHTML = `请求成功,请求返回errorNo是${obj.errInfo.no}`;
//                         } else {
//                             console.log(obj.errInfo.msg);
//                             requestResultObj.innerHTML = `请求成功,,请求返回errorNo是${obj.errInfo.no},请求返回信息是${obj.errInfo.msg}`;
//                         }
//                     });
//                 }
//             }, (ex) => {
//                 console.log(ex);
//             });
        
        axios.get('/getRequest').then(res => {
            if (!res.data) {
                return;
            }
            let obj = res.data;
            let requestResultObj = document.getElementById('handleClickRequestTest');
            if (obj.errInfo.no === '0') {
                console.log('成功');
                requestResultObj.innerHTML = `请求成功,请求返回errorNo是${obj.errInfo.no}`;
            } else {
                console.log(obj.errInfo.msg);
                requestResultObj.innerHTML = `请求成功,,请求返回errorNo是${obj.errInfo.no},请求返回信息是${obj.errInfo.msg}`;
            }
        }).catch((ex) => {
            console.log(ex);
        });

    }


    render() {
        return (
            <div className = "goldStar-indexpage">
                hi {this.state.name} , 欢迎来到goldStar-小金星幼儿园-首页--IndexTest!
                <p onClick = {this.handleClickRequest}>
                    点击我--发起请求
                </p>
                <p id="handleClickRequestTest" className="goldStar-request-msg"></p>
                <p>
                    <Link to="/index">to IndexApp Page</Link>
                </p>
                <p onClick = {this.handleClickList}>
                    to List Page
                </p>
                <a href="/about">to About Page</a>
            </div>
        )
    }
}
