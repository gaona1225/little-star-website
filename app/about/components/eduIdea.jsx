/**
 * @file 教育管理组件
 * @author gaona
 */
import React from 'react';
import './eduIdea.scss';

export default class eduIdea extends React.Component {
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
        return (
            <div className = "goldStar-component-eduIdea">
                <div className = "goldStar-component-eduIdea-main">
                    <h3>
                        教育管理
                        <p>Educational Idea</p>
                    </h3>
                    <p className = "goldStar-component-eduIdea-desc">以培养体智德美全面和谐发展的“完整儿童”为目标，构建促进幼儿多元智能开发的四大课程体系。</p>
                </div>
            </div>
        )
    }
}