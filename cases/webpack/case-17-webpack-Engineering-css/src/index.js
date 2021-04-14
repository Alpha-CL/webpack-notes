// let result1 = require('./assets/banner.css'),
//     result2 = require('./assets/pager.css');
//
// console.log(result1.toString());
// console.log(result2);
//
// const css = result1.toString(),
//     style = document.createElement('style'),
//     dv = document.createElement('div');
//
// dv.innerHTML = "hello world";
// document.body.appendChild(dv);
//
//
// style.innerHTML = css;
// document.head.appendChild(style);


/**
 * 因为设置了 use: ['style-loader', 'css-loader']
 *
 *
 * css-loader 会将 css代码转换为 字符串导出，后由 style-loader 加入到页面的 style 标签中
 */

let result = require('./assets/banner.css');

console.log(result);

const  dv = document.createElement('div');
dv.innerHTML = "hello world";
document.body.appendChild(dv);


