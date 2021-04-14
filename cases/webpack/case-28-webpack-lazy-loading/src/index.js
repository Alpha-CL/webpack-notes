const btn = document.querySelector("button");
btn.onclick = async function () {

    /**
     * 将所需的 chunk 资源转换为 '静态资源'
     *
     *
     * 由另一个模块导入，将动态资源转换为静态资源，以便于 tree shaking 分析依赖，从而优化代码
     */

    const {chunk} = await import(/*webpackChunkName:"lodash"*/"./assets/js/util.js");

    const result = chunk([1, 2, 3, 4, 5, 6], 2);

    console.log(result);
};


// const btn = document.querySelector("button");
// btn.onclick = async function () {
//
//     /**
//      * 远程加载     // 此时无法 tree shaking，因为异步加载属于副作用代码，webpack 无法判断是否依赖
//      *
//      *
//      * import 是 ES6的草案
//      * 浏览器会使用 JSOP的方式远程读取一个 JS 模块
//      * import() 会返回一个 promise
//      *
//      *
//      * 原理: 将所加载的数据放入 webpackJsonp:[]; 再调用
//      */
//
//     const {chunk} = await import(/*webpackChunkName: lodash*/"lodash-es");
//
//     const result = chunk([1, 2, 3, 4, 5, 6], 2);
//
//     console.log(result);
// };


// import {chunk} from "lodash-es";
//
// const btn = document.querySelector("button");
//
// btn.onclick = function () {
//
//     const result = chunk([3, 4, 5, 6, 7, 8], 2);
//
//     console.log(result);
// };


