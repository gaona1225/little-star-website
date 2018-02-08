/**
 * @file 官网首页路由配置
 * @author gaona
 */
import React from 'react';
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
        this.state = {
            name: 'zhangsan'
        }
    }

    handleClickList (e) {
        e.preventDefault();
        console.log('handleClickList');
        location.replace('/list');
    }

    render() {
        return (
            <div className = "goldStar-indexpage">
                hi {this.state.name} , 欢迎来到goldStar-小金星幼儿园-首页--IndexTest!
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