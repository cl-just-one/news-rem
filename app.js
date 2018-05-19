require('./index.scss');

/* 获取浏览器宽度 */
let htmlWidth = document.documentElement.clientWidth
  || document.body.clientWidth;
/* 设置字体大小 */
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlWidth / 10 + 'px';
