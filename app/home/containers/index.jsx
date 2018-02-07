/**
 * @file 官网首页路由配置
 * @author gaona
 */
import React from 'react';
import { Link } from 'react-router-dom';

const IndexApp = (store) => {
    return (
        <div className = "goldStar-indexpage">
            hi, 欢迎来到goldStar-小金星幼儿园-首页!---IndexApp!
            <p>
                <Link to="/test">to IndexTest</Link>
            </p>
        </div>
    )
}

export default IndexApp