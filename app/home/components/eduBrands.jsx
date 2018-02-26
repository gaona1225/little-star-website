/**
 * @file 四大教育品牌组件
 * @author gaona
 */
import React from 'react';
import './eduBrands.scss';

let PublicImgData = require('./publicImg.json');

PublicImgData = ((imgDataArr) => {
    for (let value of imgDataArr) {
        value.publicImgUrl = require(`../../common/image/publicImg/${value.publicImgName}`);
        value.publicImgLogoUrl = require(`../../common/image/publicImg/${value.publicImgLogo}`);
    }
    return imgDataArr;
})(PublicImgData);

export default class EduBrands extends React.Component {
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
        let publicImgList = [];
        PublicImgData.forEach((value, index) => {
            publicImgList.push(
                <li key = {index}>
                    <img src = {value.publicImgUrl} alt = {value.publicImgNameAlt} className = "eduBrands-imgElem"/>
                    <a href = "javascript:;" className = "eduBrands-mask">
                        <p className = {`eduBrands-mask-logo mask-logo-${value.publicSkinName}`}>
                            <img src = {value.publicImgLogoUrl} />
                        </p>
                        <p className = {`eduBrands-mask-main-${value.publicSkinName}`}></p>
                    </a>
                </li>
            );
        });
        return (
            <div className = "goldStar-component-eduBrands">
                <h3>四大教育品牌</h3>
                <p>Four Education Brands</p>
                <ul>
                    {publicImgList}
                </ul>
            </div>
        )
    }
}