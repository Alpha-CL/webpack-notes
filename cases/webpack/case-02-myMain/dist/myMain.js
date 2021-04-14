///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * myMain.js            // 合并两个模块
 *
 *
 * ./src/a.js
 * ./src/index.js
 */


//-------------------------------------------------------------------------------------------------------------------//


// let modules = {
//
//     './src/a.js': function (module, exports) {
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


// (function (modules) {
//
//     let modulesCache = {};                                              // 用于缓存模块结果
//
//     function _webpack_require(moduleId) {                               // 导入模块入口文件
//
//         if (modulesCache[moduleId]) return;                             // 判断是否有缓存，有则直接返回缓存结果
//
//         let module = {                                                  // 创建 module 便于模块导出
//
//             exports: {}
//         };
//
//         modules[moduleId](module, module.exports, _webpack_require);
//
//         const result = module.exports;
//
//         modulesCache[moduleId] = result;                                // 将模块导出结果存入缓存
//
//         return result;
//     }
//
//     _webpack_require('./src/index.js');
//
// }({
//     './src/a.js': function (module, exports) {
//
//         console.log('modules-a');
//         module.exports = 'a';
//     },
//
//     './src/index.js': function (module, exports, _webpack_require) {
//
//         console.log('modules-index');
//         const a = _webpack_require('./src/a.js');
//         console.log(a);
//     }
// }));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


(function (modules) {               // webpackBootstrap

    // The module cache
    var installedModules = {};

    // The require function
    function __webpack_require__(moduleId) {

        // Check if module is in cache
        if (installedModules[moduleId]) {

            return installedModules[moduleId].exports;
        }

        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {

            i: moduleId,
            l: false,
            exports: {}
        };

        // Execute the module function
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        module.l = true;

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

})({

    "./src/index.js": (function (module, exports) {

        /**
         * eval();              // 浏览器执行时，会将 eval(); 中的代码单独放在一个环境中执行，若报错，便于查看
         *
         * //# sourceURL=webpack:///./src/index.js?         // 设置浏览器报错路径规则
         */

        eval("n\n\n//# sourceURL=webpack:///./src/index.js?");
    })
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////