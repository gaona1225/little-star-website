/**
 * @file 对axios简单封装满足post请求兼容性和get请求自动加时间戳
 * @author houzhiqiang@baidu.com
 */

// 低版本浏览器不兼容Promise
const Promise = require('es6-promise').polyfill();
import axios from 'axios';
// form表单提交数据
require('url-search-params-polyfill');


/**
 * get请求的方法加时间戳
 * @param {*} url get请求的url
 * @param {*} reqData get请求的数据体
 */
function reqGet(url, reqData) {
    const reqUrl = `${url}?v=${(new Date()).getTime()}`;
    return  axios.get(reqUrl, {
        params: reqData
    });
}

/**
 * post请求兼容性写法
 * @param {*} url 请求的url
 * @param {*} reqData 需要传输的数据体
 */
function reqPost(url, reqData) {
    const params = new URLSearchParams();

    for (var item in reqData) {
        if (reqData.hasOwnProperty(item)) {
            params.append(item, reqData[item]);
        }
    }
    return axios.post(`${url}`, reqData);
}


module.exports = {
    get: reqGet,
    post: reqPost
};
