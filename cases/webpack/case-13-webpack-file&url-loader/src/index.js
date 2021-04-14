// console.log('hello world');


// /**
//  * 模拟 file-loader 的过程
//  *
//  */
//
// function loader(source) {
//
//     // source: 图片内容( buffer )
//     // 1. 生成一个具有相同文件内容的文件到输出目录
//     // 2. 返回一段代码 export default "file-path"
//
// }

// /**
//  * 模拟 url-loader 的过程
//  *
//  */
//
// function loader(source) {
//
//     // source: 图片内容( buffer )
//     // 1. 根据 buffer 生成一个 base64-code
//     // 2. 返回一段代码 export default "base64-code"
//
// }


// const png = require('./assets/webpack.jpg').default;
//
// console.log(png);
//
// if (Math.random() < 0.5) {
//
//     const img = document.createElement('img');
//     img.src = png;
//     document.body.appendChild(img);
// }


const png = require('./assets/webpack2.png').default,
    jpg = require('./assets/webpack1.jpg').default;

console.log(png);
console.log(jpg);

const imgPng = document.createElement('img'),
    imgJpg = document.createElement('img');

imgPng.src = png;
imgJpg.src = jpg;

document.body.appendChild(imgPng);
document.body.appendChild(imgJpg);