import '../style/main.scss';

var dpr;
var rem;
var scale;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');
var width = docEl.clientWidth;
if (width > 420) {
    width = 420;
}
dpr = window.devicePixelRatio || 1;
var isAndroid = window.navigator.appVersion.match(/android/gi);
var isIframe = (window.top != window.self);
if (isAndroid || isIframe) {
    dpr = 1;
}
rem = width * dpr / 10;
scale = 1 / dpr;
// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute('content', 'width=' + dpr * width + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no, viewport-fit=cover');

// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr);

// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

// 给js调用的，某一dpr下rem和px之间的转换函数
window.rem2px = function (v) {
    v = parseFloat(v);
    return v * rem;
};
window.px2rem = function (v) {
    v = parseFloat(v);
    return v / rem;
};

window.dpr = dpr;