// import $ from 'jquery';
// import _ from 'lodash';
//
// /**
//  * 全局配置 webpack.ProvidePlugin 后，即可直接使用 第三方模块
//  *
//  *
//  */

// 执行原理
//
// (function (module, exports, __webpack_requore__) {
//
//     (function ($, _) {
//
//         $('img');
//
//         _.drop([1, 2, 3], 2);
//
//     }.call(this, __webpack_requore__('jquery.js'), __webpack_requore__('lodash.js')));
//
// }());

$('img');

_.drop([1, 2, 3], 2);



