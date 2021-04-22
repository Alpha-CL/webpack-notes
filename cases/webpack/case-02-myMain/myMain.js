///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * myMain.js            // 合并两个模块
 *
 *
 * ./src/a.js
 * ./src/index.js
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 模拟 webpack 模块化 编译 与 解析
 *
 *
 ** 此时会造成全局变量污染
 ** 最终 modules 会作为参数直接传递给 立即执行函数
 */

// /** modules 保存了所有的模块 及模块对应的代码  **/
//
// let modules = {
//
//     /** 将 模块的路径 作为 modules.key **/
//
//     './src/a.js': function (module, exports) {
//
//         /** 将模块中的内容作为 函数内容 **/
//
//         console.log('modules-a');
//         module.exports = 'a';
//     },
//
//     './src/index.js': function (module, exports, require) {
//
//         console.log('modules-index');
//         const a = require('./src/a.js');
//         console.log(a);
//     }
// };


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * webpack 编译过程推析
 *
 *
 * 1) 将 modules { 模块路径: 模块内容 } 作为参数传递给 自执行函数，避免污染全局变量
 *
 * 2) 初始化模块倒入
 *
 * 		- 创建模块倒入缓存对象
 *
 * 3) 执行模块倒入函数( 模块ID )
 *
 * 		- 判断是否已有该 模块ID 对应的缓存，有则直接返回缓存结果
 *
 * 		- 创建模块对象 { 模块ID, 是否已倒出完成，模块倒出结构 }
 *
 * 		- 运行模块( module, module.exports, _webpack_require )
 *
 * 		- 保存 "模块倒出的结果"
 *
 * 		- 将 "模块倒出结果" 存入缓存
 *
 * 		- 倒出 "模块倒出结果"
 */


// (function (modules) {
//
// 	let modulesCache = {};                                              // 创建模块倒入缓存对象
//
// 	function _webpack_require(moduleId) {                               // 导入模块入口文件
//
// 		if (modulesCache[moduleId]) return;                             // 判断是否已有该 moduleId 对应的缓存，有则直接返回缓存结果
//
// 		let module = {                                                  // 创建 module 便于模块导出
//
// 			exports: {}
// 		};
//
// 		modules[moduleId](module, module.exports, _webpack_require);	// 运行模块
//
// 		const result = module.exports;									// 模块的倒出结果
//
// 		modulesCache[moduleId] = result;                                // 将模块导出结果存入缓存
//
// 		return result;
// 	}
//
// 	_webpack_require('./src/index.js');
//
// }({																    // 将 模块对象{ 模块路径: 模块内容 } 作为参数直接传递给 立即执行函数，避免污染全局变量
//
// 	'./src/a.js': function (module, exports) {
//
// 		console.log('modules-a');
// 		module.exports = 'a';
// 	},
//
// 	'./src/index.js': function (module, exports, _webpack_require) {
//
// 		console.log('modules-index');
// 		const a = _webpack_require('./src/a.js');
// 		console.log(a);
// 	}
// }));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


(function (modules) {               // webpackBootstrap

    // The module cache
    var installedModules = {};

    // The require function
    function __webpack_require__(moduleId) {				// 倒入模块的函数

        // Check if module is in cache
        if (installedModules[moduleId]) {					// 检查是否已有模块倒入的缓存，如果有则直接返回模块缓存

            return installedModules[moduleId].exports;
        }

        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {			// 初次倒入默认添加 模块倒入缓存

            i: moduleId,									// 模块id
            l: false,										// 模块是否倒出完成
            exports: {},									// 模块倒出结果
        };

        // Execute the module function
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);		// 运行模块

        // Flag the module as loaded
        module.l = true;									// 模块缓存成功

        // Return the exports of the module
        return module.exports;
    }

    // /**
    //  * 处理模块导入导出的兼容
    //  *
    //  *
    //  */
    //
    // // // expose the modules object (__webpack_modules__)
    // __webpack_require__.m = modules;
    //
    // // expose the module cache
    // __webpack_require__.c = installedModules;
    //
    // // define getter function for harmony exports
    // __webpack_require__.d = function (exports, name, getter) {
    //
    //     if (!__webpack_require__.o(exports, name)) {
    //
    //         Object.defineProperty(exports, name, {enumerable: true, get: getter});
    //     }
    // };
    //
    // // define __esModule on exports
    // __webpack_require__.r = function (exports) {
    //     if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    //
    //         Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
    //     }
    //     Object.defineProperty(exports, '__esModule', {value: true});
    // };
    //
    // // create a fake namespace object
    // // mode & 1: value is a module id, require it
    // // mode & 2: merge all properties of value into the ns
    // // mode & 4: return value when already ns object
    // // mode & 8|1: behave like require
    // __webpack_require__.t = function (value, mode) {
    //     if (mode & 1) value = __webpack_require__(value);
    //     if (mode & 8) return value;
    //     if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    //     var ns = Object.create(null);
    //     __webpack_require__.r(ns);
    //     Object.defineProperty(ns, 'default', {enumerable: true, value: value});
    //     if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
    //         return value[key];
    //     }.bind(null, key));
    //     return ns;
    // };
    //
    // // getDefaultExport function for compatibility with non-harmony modules
    // __webpack_require__.n = function (module) {
    //
    //     var getter = module && module.__esModule ?
    //         function getDefault() {
    //             return module['default'];
    //         } :
    //         function getModuleExports() {
    //             return module;
    //         };
    //     __webpack_require__.d(getter, 'a', getter);
    //     return getter;
    // };
    //
    // // Object.prototype.hasOwnProperty.call
    // __webpack_require__.o = function (object, property) {
    //     return Object.prototype.hasOwnProperty.call(object, property);
    // };
    //
    // // __webpack_public_path__
    // __webpack_require__.p = "";

    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = "./src/index.js");

})({                // 将 模块对象{ 模块路径: 模块内容 } 作为参数直接传递给 立即执行函数，避免污染全局变量

    "./src/index.js": (function (module, exports) {

        /**
         * eval();              // 浏览器执行时，会将 eval(); 中的代码单独放在一个环境中执行，若报错，便于查看
         *
         * //# sourceURL=webpack:///./src/index.js?         // 设置浏览器报错路径规则
         *                                                  // 当调试时，浏览器会将错误代码在单独的环境中展示
         */

        eval("n\n\n//# sourceURL=webpack:///./src/index.js?");
    })
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////