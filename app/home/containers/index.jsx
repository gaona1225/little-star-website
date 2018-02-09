/**
 * @file 官网首页路由配置
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import Header from '../../components/layout/header.jsx';

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
    }


    render() {
        return (
            <div className = "goldStar-indexpage">
                <Header />
                hi {this.state.name}, 欢迎来到goldStar-小金星幼儿园-首页!---IndexApp!
                <p onClick = {this.handleClick}>点击我</p>
                <p>
                    <Link to="/test">to IndexTest Page</Link>
                </p>
            </div>
        )
    }
}