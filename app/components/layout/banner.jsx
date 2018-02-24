/**
 * @file 广告banner组件
 * @author gaona
 */
import React from 'react';
import $ from 'expose-loader?$!jquery';
import './banner.scss';
import './common/slideBanner/slideBanner.js';

let ImgData = require('./common/slideBanner/slideBannerImg.json');

ImgData = ((imgDataArr) => {
    for (let value of imgDataArr) {
        value.imgUrl = require(`./common/slideBanner/img/${value.fileName}`);
    }
    return imgDataArr;
})(ImgData);


export default class Banner extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            alt: '小金星国际教育集团'
        }
    }

    handleClick (e) {
        e.preventDefault();
        console.log('click');
    }

    componentDidMount () {
        // console.log($.fn.jquery);
        $('#full_feature').swipeslider({
            prevNextButtons: false,
            autoPlayTimeout: 1500,
            sliderHeight: 0
        });
    }

    render() {
        // 循环遍历slideBannerImg.json,配置li元素
        let imgList = [];
        ImgData.forEach((value, index) => {
            imgList.push(<li key = {index} className = "sw-slide"><img src = {value.imgUrl} alt = {value.alt} /></li>);
        });
        return (
            <div className = "goldStar-component-banner">
                <div id = "full_feature" className = "swipslider">
                    <ul className = "sw-slides">
                        {imgList}
                    </ul>
                </div>
            </div>
        )
    }
}