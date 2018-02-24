/**
 * @file mainNav组件
 * @author gaona
 */
import React from 'react';
import './mainNav.scss';

export default class MainNav extends React.Component {
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
            <div>
                <div className = "goldStar-component-mainNav">       
                    <a href = "javascript:;" className = "goldStar-component-mainNav-list">
                        <dl>
                            <dt className = "dt-list-jj"></dt>
                            <dd>小金星简介</dd>
                        </dl>
                    </a>
                    <a href = "/about" className = "goldStar-component-mainNav-list">
                        <dl>
                            <dt className = "dt-list-gh"></dt>
                            <dd>办学管理规划</dd>
                        </dl>
                    </a>
                    <a href = "/about" className = "goldStar-component-mainNav-list">
                        <dl>
                            <dt className = "dt-list-xc"></dt>
                            <dd>集团宣传片</dd>
                        </dl>
                    </a>
                </div>
                <div className = "goldStar-component-mainNavCon">
                    <h3>小金星简介</h3>
                    <p className = "mainNavCon-desc">About Little Golden Star</p>
                    <p className = "mainNavCon-msg">
                        「小金星国际幼儿园」建创于1997年，集团在中国15个省和直辖市开办了上百所直营连锁幼儿园，拥有在校师生人数近4万名，幼儿园总建筑面积逾40万平方米。  「小金星」秉承“爱心教育、开蒙养正、服务社会、培养新生”的办学宗旨，办学理念融贯中西，培养具中国心国际视野的优秀儿童。「小金星」办学成绩显著，先后获得“中国十大儿童教育领先品牌”、“ 全国创新建设十佳示范幼儿园”、“ 全国百佳民办幼儿园”等众多社会荣誉称号。
                    </p>
                </div>
            </div>
        )
    }
}