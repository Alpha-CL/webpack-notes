# Webpack

## basic

#### webpack introduction

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * webpack
 * 
 * 
 */

1) webpack 使用层面很简单，原理很复杂

2) webpack 生态圈很繁荣，有海量第三方库


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 浏览器端的模块化                     // 工程问题
 * 
 * 
 */

1) 效率问题: 精确的模块划分，造成了更多的 JS 文件，导致 更多 的请求，降低了页面的访问效率

2) 兼容性问题: 浏览器目前仅支持 ES6 模块化标准，并且还存在兼容性问题

3) 工具问题: 浏览器不支持 npm 下载的第三方包


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 根本原因
 * 
 * 
 */

// node 环境中

运行的 JS 文件在本地，因此可以本地读取文件，效率比浏览器远程传输高很多


// 浏览器 环境中

开发状态( devtime ) 和 运行状态( runtime ) 的侧重点不一样


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


开发状态( devtime )

1) 模块划分越细越好

2) 支持多种模块化标准

3) 支持 npm 或 其他包管理器 下载的模块

4) 可以解决其他工程化问题


运行状态( runtime )

1) 文件越少越好

2) 文件体积越小越好

3) 代码内容越乱越好( 防止他人抄袭 )

4) 所有浏览器都要兼容

5) 可以解决其他运行时的问题，主要是执行效率问题


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


        + ---- devtime ---- +                               + ---- runtime ----- +
        |                   |                               |                    |
        |                   |                               |                    |
        |     Module-1      | =====> Construct Tool ======> |                    |
        |                   |                               |                    |
        |     Module-2      |          webpack              |                    |
        |                   |          grunt                |     target.js      |
        |     Module-3      |          gulp                 |                    |
        |                   |          browseerify          |                    |
        |     Module-N      |          fis                  |                    |
        |                   |          ...                  |                    |
        |                   |                               |                    |
        + ----------------- +                               + ------------------ +


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### webpack

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 打包所有的脚本
 * 
 * 
 * 通过开发时入口模块为起点，分析出所有依赖关系
 * 
 * 然后( 合并，压缩 ... )，最终生成运行时态的文件
 */


 .js
 
         .js
         
 .hbs            .png                                
                                                     .js     .css
         .sass           ======> webpack =======>
                                                     .jpg    .png        
 .cjs            .jpg             node                        
 
         .sass
         
 .sass
 
 Modules with dependencies                           static assets


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * webpack 的特点
 * 
 * 
 */

1) 为前端工程化而生

   webpack 致力于解决前端工程化( 基于浏览器环境 )


2) 简单易用

   支持零配置( 无需任何代码配置，即可使用 )


3) 强大的生态
   
   webpack 非常灵活，可扩展( 第三方库丰富 )，本身功能并不多，


4) 基于 node.js

   webpack 在构建过程中需要读取文件，构建过程中基于 node 环境中
   

5) 基于模块化

   webpack 在构建过程中需要分析依赖关系( 基于模块化入口文件分析依赖 )
   
   支持各种模块化标准( CommonJS，ES6，Module )


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### install webpack

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * install webpack                  // 全局安装
 * 
 * 
 * 建议本地根据项目安装( 全局安装会导致所有工程的 webpack 版本都是一样 )
 */


npm i -D webpack webpack-cli


// wepack: 核心包( 包含了 webpack 构建过程中用到的所有 API )
// 
// webpack-cli: 提供命令行调用 webpack 核心包中的 API( 用于构建 webpack )


//-------------------------------------------------------------------------------------------------------------------//


/**
 * execute webpack
 * 
 * 
 */


[npx] webpack


默认情况下: webpack 会以当前工程根目录下的 ./src/index.js 为入口文件分析模块依赖关系

          将打包好的代码放置到当前工程根目录下的 ./dist/main.js 中


//-------------------------------------------------------------------------------------------------------------------//


/**
 * webpack mode
 * 
 * 
 * 设置 webpack 打包环境
 */


webpack --mode=development

webpack --mode=development --watch          // 添加监控，实时改变文件内容即重新执行


1) development

2) production                               // default mode



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Module compatibility

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * CommonJS
 * 
 * 
 */

exports.key = {

    prop,
    method
};

const moudle = require('./demo.js');

module.exports = {

}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * ES6 Moudle
 * 
 * 
 */

export { propName, methodName };

import { exportListItemItem } form "exportUrl";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 无论模块之间遵循何种导入导出规范，webpack 都可以很好的兼容
 * 
 * 
 */


1) CommonJs export + ES6 import

2) ES6 export + CommonJs import

3) ...


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## content

#### myMain

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
```

#### webpack.config.js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * webpack.config.js            // 指定 webpack 配置文件
 * 
 * 
 * 参与编译过程( node 环境中运行 )，所以配置文件仅支持有效的 node 代码( 仅支持 CommonJS 规范 )
 * 
 * 配置文件中必须是有效的 node 代码( 不支持 ES6 即其他 模块规范 )
 */


webpack --config config.js 


//-------------------------------------------------------------------------------------------------------------------//


1) mode: string;        // 指定编译结果代码运行环境，影响 webpack 对编译结果代码的格式处理


2) entry: string;       // 指定文件入口


3) output: object;      // 指定编译结果文件


4) ...


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 默认配置

module.export = {

    mode: 'devolopment',
    
    entry: './src/index.js',
    
    output: {
    
        fileName: 'main.js',
        
        ...
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Compile process of webpack

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    | - - - - - 初始化 --------------------> 编译 ---------------------> 输出 - - - - - - | 

    + -------------------------- +                                                                                                             
    |                            |                                                 
    |   .js                      |                                                    
    |                            |                                                            
    |           .js              |                                                                     
    |                            |                           + ------------------------- +
    |   .hbs            .png     |                           |                           |
    |                            |                           |       .js     .css        |
    |           .sass            |  ======> webpack ======>  |                           |
    |                            |                           |       .jpg    .png        |
    |   .cjs            .jpg     |                           |                           |
    |                            |                           + ------------------------- +
    |           .sass            |                                                                     
    |                            |                                                                    
    |   .sass                    |                                                                
    |                            |                                              
    + -------------------------- +                                                                                                             

      Modules with dependencies                                      static assets


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 初始化
 * 
 * 
 * webpack 会将 CLI 参数，配置文件，默认配置等进行融合配置，形成最终的 配置对象
 */

配置处理过程，依托于第三方库  yargs 


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 编译
 * 
 */

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


        + ------------ main chunk -------------- +
        |                                        |
        |                                        |
        |      + ---- index module ---- +        |
        |      |                        |        |
        |      |     ./src/index.js     |        |
        |      |                        |        |
        |      + ---------------------- +        |
        |                                        |
        |                                        |
        + -------------------------------------- +

/**
 * step-1: 创建 chunk
 * 
 * 
 * chunk 是 webpack 内部构建过程中的一个概念( 表示通过某个入口，分析并获取依赖 )
 */

默认根据入口模块( default: ./src/index.js )创建 chunk

每个 chunk 至少具有两个属性

chunk {

    'name': 'main',                 // 默认为 main
    'id': 'xxx'                     // 开发环境时 value: name; 相同，生产环境时 value: number;( 从零开始 )
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


    chunk {         // 用于记录模块转换后的代码
        
        'moduleId': 'tranformedCode'
        './scr/index.js': 'xxxxxxx',
        ...
    }
                        /\
                       /||\
                        ||
                      检查记录
           
    入口 ----> 入口模块文件 -------> 已记录则结束 ---> 读取文件内容 --> AST( 抽象语法树 ) ---> 将依赖关系保存 ------------>>
                                  未记录则继续                        语法分析        ( 保存至 dependencies 文件中 )        
                                                                   树形结构遍历      ( 获取 require(); 中 )
                                                                   获取所有依赖      ( 所对应的完整路径作为 moduleId )


    >> 替换依赖函数 ----------------------------------------> 保存转换后的模块代码 ----------------------------> 入口
    require('a'); =>  __webpack_require('./src/a.js');
                                                                              根据 dependencies 中的依赖关系
                                                                              递归加载所有依赖模块


/**
 * step-2: 构建所有依赖模块
 * 
 */

1) 读取入口文件

   分析是否已有保存转换后的代码


2) 抽象语法树，利用 dependencies 记录所有依赖关系

   替换依赖函数 require('a'); =>  __webpack_require('./src/a.js');


3) 利用保存的依赖关系，递归加载所有依赖模块文件

   获取所有转换后的代码，并记录于 chunk assets 中 


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * step-3
 * 
 * 
 * 根据 step-2 中的 chunk {} 生成 chunk assets {}
 */

chunk { // 用于记录模块转换后的代码            main chunk { // 最终合并的 js 模块代码        assets {
                                                                                                
    'moduleId': 'tranformedCode'    ===>        'modulesId': 'finallyCode',    =>           main chunk hash,
    './src/index.js': 'xxxxxxx',                './dist/main.js': 'xxxxxx',                 sub  chunk hash,
    './src/a.js': 'xxxxxx'                      './dist/main.js.map': 'xxx'                 ...
    ...                                         ...
}                                           }                                          }
            
                                            main chunk hash: xxxxxxxxxxxxxx            hash: xxxxxxxxxx
                                            ( 用于判断文件是否改变 )

                                            sub chunk {                                 
                                                                                        
                                                ...
                                            }
                                            
                                            sub chunk hash: xxxxxxxxxxxxxxx
                                            
                                            ...             


// chunk hash: 根据所有 chunk assets 的内容生成的一个 hash 字符串
// hash( 一种算法，有很多分类 ): 将一个任意长度的字符串转换为一个固定长度的字符串，并且可以保证原始内容不变



//-------------------------------------------------------------------------------------------------------------------//


/**
 * 输出
 * 
 * 
 * webpack 利用 node 中的 fs模块( 文件处理模块 )
 * 
 * 根据编译产生的 assets，生成相应的文件
 */


assets {

    main chunk hash,
    sub  chunk hash,
    ...
}

hash: xxxxxxxxxx


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 涉及术语
 * 
 * 
 */

1) module

   模块，分割的代码单元，webpack 中的模块可以是任何内容的文件，不仅限于 JS


2) chunk

   webpack 内部构建模块的块，一个 chunk 包含多个模块，这些 模块是从入口模块中通过依赖分析所获取


3) bundle

   chunk 构建好模块后会生成 chunk 资源清单，清单中的每一项即是一个 bundle，可以认为 bundle 是最终生成的文件


4) hash

   将一个任意长度的字符串转换为一个固定长度的字符串，并且可以保证原始内容不变

   ( hash: 依据总资源; chunkhash: 依据单个chunk; contenthash: 依据单个文件; )


5) chunkhash

   chunk 生成的资源清单内容联合生成的 hash 值


6) chunkname

   chunk 名称，若没有则使用 main


7) id

   通常指 chunk 的唯一编号，如果在开发环境下构建，和 chunkname 相同，若在生产环境下构建，则使用一个从零开始的数字进行编号


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### entry and output of webpack

#### How to configure entry and output

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * path                 // node 内置模块，用于处理路径
 *
 * path.resolve();      // 将多段路径合并为一个绝对路径
 */

let path = require('path');

module.exports = {

    mode: "development",

    /**
     * entry: 'des.js' === entry: { main: 'des.js' }
     *
     *
     * 设置入口模块，获取入口模块的依赖关系，从而合并所有模块的代码
     */

    entry: {

        main: './src/index.js',     // 设置入口模块路径( 默认 ./src/index.js ),
                                    // key: moduleName; value: modulePath;


        // a: './src/a.js'                          // 合并单个入口模块的所有依赖模块

        a: ['./src/a.js', './src/index.js']         // 一次性合并多个入口模块的所有依赖模块


    },

    output: {

        path: path.resolve(__dirname, 'test'),      // 必须是绝对路径，表示设置导出资源
                                                    // 默认 './dist/main.js'


        // publicPath: "/"                          // 无任何意义，仅部分 pluin & loader 会调用( 大部分作为拼接路径使用 )


        /**
         * filename: 'des.js';      // 静态设置
         *
         *
         * 用于设置相应 chunk 中 '合并js文件' 的路径名规则
         */

        /**
         * filename: '[rule].js'    // 动态规则设置
         *
         *
         * [name]                   // 根据 chunkName 动态获取 name
         * 
         * 
         * [ext]                    // 默认文件类型( 不改变原始文件类型 )
         *
         *
         * [hash:number]            // 设置 hash 会导致 最终hash 也会改变( 不利于浏览器缓存判断是否重新请求文件 )
         *                          // hash: 将一个任意长度的字符串转换为一个固定长度的字符串，并且可以保证原始内容不变
         *                          // 用于浏览器请求文件自动缓存后，判断是否重新获取该文件( 利用 hash 判断js文件内容是否更改 )
         *
         *
         * @number: 设置截取 hash 的前 number 位
         *
         *
         * [chunkhash:number]       // 设置 chunkhash 不会影响最终 hash( 利于浏览器缓存判断是否重新请求文件 )
         *
         *
         * [id]                     // chunkId( 不建议使用，因为生产环境 chunkId 为 chunkName，生产环境为 数字 )
         *
         *
         * eg: filename: '[name]-[hash].js'
         */

        // filename: "script/test.js"               // 静态设置: 若有多个导入文件，则导出会冲突
        filename: "[name]-[hash:5].js"              // 根据 chunk 名称动态替换
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Examples-single file has single js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 单个页面单个JS
 * 
 * 
 * 适用于重复代码较少的页面( 可以介绍较少的重复加载 )
 * 
 * 因可能会造成单页面JS中 重复代码加载多次( 因重复代码和模块之间存在依赖关系，所以无法通过 chunk 抽离 )
 */

    pageA ---> JS

    pageB ---> JS

    pageC ---> JS


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// source directory


|-src
    |- pageA
        |- index.js
        |- ...
        
    |- pageB
        |- index.js
        |- ...
        
    |- pageC
        |- mian.js
        |- sub.js
        |- ...
        
    |- common
        |- index.js
        |- ...


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// webpack config


moudule.exports = {

    entry: {
    
        pageA: "./src/pageA/index.js",
        pageB: "./src/pageB/index.js",
        pageC: ["./src/pageC/main.js", "./src/pageC/sub.js"]
    },
    
    output: {
    
        filename: "[name].[chunkhash:5].js"
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Example-Single file multiple js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 单个页面多个js
 * 
 * 
 * 适用于页面之间有一些独立，相同的功能
 * 
 * 利用 chunk 抽离这部分独立，相同的功能，仅在需要的页面加载
 */

    pageA -- + ---> JS
             |
             + ---> JS
          + ------> JS
          |
    pageB + ------> JS

    
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// source directory


|-src
    |- pageA
        |- index.js
        |- ...
        
    |- pageB
        |- index.js
        |- ...
        
    |- statistics
        |- index.js
        |- ...

    |- common
        |- index.js
        |- ...


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// webpack config


moudule.exports = {

    entry: {
    
        pageA: "./src/pageA/index.js",
        pageB: "./src/pageB/index.js",
        statistics: "./src/statistics/index.js"
    },
    
    output: {
    
        filename: "[name].[chunkhash:5].js"
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Example-Single page application

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 单页面应用
 * 
 * 
 * 指整个网站( 或网站的某一个功能块 )只有一个页面，页面中的内容全部靠JS创建和控制       // vue & react 都是实现单页面的利器
 */

    page ---> JS


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// source directory


|-src
    |- subFunc
        |- ...
        
    |- subFunc
        |- ...
        
    |- common
        |- ...
        
    |- index.js


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// webpack config


moudule.exports = {

    entry: "./src/index.js",
    
    output: {
    
        filename: "index.[name:5].js"
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### loader and plugin of webpack

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


webpack 仅做分析出各个模块的依赖关系，然后形成资源列表，最终打包生成到指定文件当中

更多的功能需要借助 loader & plugins 完成

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


loader 的功能定位是转换代码，而一些其他的操作难以使用loader 完成

更多的文件及任务执行等操作依托于 plugins


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### What is loader

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * loader                   // 本质上是一个函数
 * 
 * 
 * 将某个源码字符串转换成另一个源码字符串返回
 */

function loader(str) return newStr;


... ---> 读取文件内容 --- execute-loaders ---> AST( 抽象语法树 ) ---> ....


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

                             yes
    -------> 当前模块是否满足某个规则 -------> 读取规则中对应的 loaders
                    |                                |
                    | no ( empty-arr )               |
                    |                               \|/
                    |
                    + -------------------------> loaders arr
                                                     |
                                                     |
                                                    \|/
    
    + --------------------------------------------------------------- +        
    |                                                                 |     \
    |                code          code          code          code   | ---- \
    |   <-- loader1 <---- loader2 <---- loader3 <---- loader4 <----   | ---- /      source code
    |                                                                 |     /
    + --------------------------------------------------------------- +                


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### How to usage loader 

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {

    mode: "development",

    module: {                                   // 根据模块配置，目前版本只有两个配置: rules, noParse

        /**
         * rules[ {rule_1}, {rule_2}, {rule_3} ...]
         *
         *
         * 模块匹配规则
         *
         * 匹配顺序: {rule_1}, {rule_2}, {rule_last-3} ...          // 顺序
         */

        rules: [

            /**
             * if (test: regex) { execute use{ loaders } };
             *
             *
             * 通过 test 匹配模块，若匹配到相应模块，则执行 use 中指定的 loader
             */

            {
                test: /index\.js$/,             // 用于匹配模块路径的正则表达式

                use: [                          // test 匹配成功后执行相应的 加载器

                    {                           // 每个加载器为一个对象

                        /**
                         * 可以配置多个 loader
                         *
                         *
                         * 当模块匹配成功，模块代码将被作为参数( 字符串 )传递给 loader 执行
                         * 
                         * loader 匹配执行规则: loader_last, loader_last-1, loader_lastt-2 ...        // 倒序
                         *                     先合并所有的 loader 为一个数组，再倒序匹配执行
                         */

                        loader: "./loaders/test-loader",        // 执行原理: require(loader.value);
                                                                // 必须是绝对路径，否则会在 node_modules 中查找

                        /**
                         * options{}
                         *
                         *
                         * 可配置自定义 要修改的参数
                         *
                         * 设置的参数，仅可以在 loader 运行中的 this 才可以获取( 也可以 loader-utils 工具便捷获取 )
                         */

                        options: {              // 改变参数也可以设置在 loader: './loaders/test-loader?changeVar=let'

                            changeVar: 'let'    // 自定义参数
                        }
                    }
                ]
            }
        ],

        /**
         * noParse
         *
         * 是否不解析某个模块
         */

        // noParse: [
        //
        // ]
    }
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 简化版

module.exports = {

    mode: "development",

    module: {                                   

        rules: [

            {
                test: /index\.js$/,             
                use: [ { loader: "./loaders/test-loader" } ]
            }
        ]
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### plugins

#### what is plugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * plugin 的本质是一个带有 apply 方法的对象
 * 
 * 
 * 可以在 webpack 运行过程中的不同阶段 注册不同的事件
 */


//-------------------------------------------------------------------------------------------------------------------//


let MyPlugin = {

    apply: function (compiler) {
    
    }
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class MyPlugin {                                      // 通常使用

    apply: function (compiler) {
    
    }
}

const plguin = new myPlugin();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### How to usage plugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * plugin
 * 
 * 
 * 需要在 webpack.config.js 中设置
 */


let MyPlugin = require('./plugins/MyPlugin.js');

module.export  = {

    plugins: [
    
        new MyPlugin()
    ]
};


//-------------------------------------------------------------------------------------------------------------------//


/**
 * compiler
 * 
 * 
 */


1) compiler 对象是在初始化阶段构建的

2) 整个 webpack 打包期间只有一个 compiler

3) 后续完成打包工作的是 compiler 对象内部创建的 compilation

4) apply 方法会在创建好 compiler 对象后调用，并向方法传入一个 compiler 对象


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * compilation vs compiler
 * 
 * 
 * 整个 webpack 打包期间只有一个 compiler
 * 
 * 若开启监听，并且文件发生改变，则可能会出现多个 compilation
 */


        + -------------------- compiler --------------------------------- +         // 只会生成一个
        |                                                                 |
        |                                                                 |
        |       + ------------ compilation ------------------------- +    |         // 有可能产生多个
        |       |                                                    |    |
        |       |                                                    |    |
                                                                     |    |
     |初始化 -------------------> 编译 ---------------------> 输出|    |    |
                         |                                      |    |    |
        |       |        |                                      |    |    |
        |       |        |<-------------- file changed -------->|    |    |
        |       |                                                    |    |
        |       + -------------------------------------------------- +    |
        |                                                                 |
        + --------------------------------------------------------------- +

        * 当 webpack 开启监听模式，文件发生变化时，会重新创建一个 compilation


//-------------------------------------------------------------------------------------------------------------------//


/**
 * apply();
 * 
 * 
 * apply(); 仅在 webpack 创建完 compiler 后执行一次           // 类似于 window.onload
 */

module.exports = class MyPlugin {

    apply(compiler) {
    
        /**
         * 在 apply(); 中注册事件需要监听的事件
         * 
         * EventName: 事件名; 
         * EventType: 事件类型;
         * name: 用于调试，通常填写函数名
         */
        
        compiler.hooks.EventName.EventType(name, function(compilation){
        
            // 事件处理函数
        });
    }
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Event Type
 * 
 * 
 */

tap: 注册一个同步的 钩子函数，函数运行完毕则表示事件处理结束

tapAsync: 注册一个基于回调的异步钩子函数，函数通过执行 参数中回调函数( 表示事件处理结束 )

tapPromise: 注册一个基于 Promise 的异步钩子函数，函数通过返回的 Promise 进入 已决状态 表示事件处理结束


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## devtool config

#### what is source-map

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


很多时候并不会直接运行源码( 合并，压缩，转换等 )，实际运行的是转换后的代码

实际运行转换后的代码，在调试过程中，发生错误时，无法查看在源码中的错误信息


//-------------------------------------------------------------------------------------------------------------------//


/**
 * source map                   // 与 webpack 无关
 * 
 * 
 * source map 是一个配置，配置中不仅记录了所有源码内容，还记录了转换后的代码对应关系
 */


1) source map 应在开发环境中使用

   作为一种调试手段


2) source map 不应该在生产环境中使用

   source map 文件一般较大，会导致额外网络传输，容易暴露源码
   
   ( 若在生产环境中使用，需要处理网路问题和源码暴露问题 )


//-------------------------------------------------------------------------------------------------------------------//


                    + ----------- +
                    |             |
                    |   Browser   |
                    |             |
                    + ----------- +
                           |
                        request                     // 浏览器请求服务器，获取转换后的代码
                           |
        + ------------------------------------ +
        |                                      |
        |   #$#@(^&@!*(!$&#*($!$^!(#&$#*(!^^   |    // 转换后的代码: 无空格，无换行，便捷的变量名等，难以阅读
        |   !#*()#!&*#()!&$)!&$($*#()!#*(#$*   |    
        |   (!*&$#$!$*$#!&*$(#& ...            |
        |                                      |
        |   //# sourceMappinggURL=bundle.map   |    // 浏览器发现有 source map
        |                                      |
        + ------------------------------------ +
                           |
                      request again                 // 再次请求
                           |
        + ------------- bundle.js ------------ +
        |                                      |    
        |    source code                       |    // source map: 记录了源码
        |                                      |                   记录了源码和转换后代码的对应关系
        |    source code <--> result code      |                   ...
        |    ...                               |    
        |                                      |    
        + ------------------------------------ +


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


                    + ----------- +
                    |             |
                    |   Browser   |
                    |             |
                    + ----------- +
                           |
                        request                     // 请求资源   
                           |
        + ------------------------------------ +
        |                                      |
        |   #$#@(^&@!*(!$&#*($!$^!(#&$#*(!^^   |        
        |   !#*()#! [Error] &*$($*#()!#*(#$*   |    // 发现错误 [Error]          
        |   (!*&$#$!$*$#!&*$(#& ...            |
        |                                      |
        |   //# sourceMappinggURL=bundle.map   |    // 发现 sourceMap 绑定文件        
        |                                      |
        + ------------------------------------ +
                           |
                      request again                 // 再次请求 bundle.js      
                           |
        + ------------- bundle.js ------------ +
        |                                      |          
        |    source code                       |        
        |                                      |        
        |    source code <--> result code      |        
        |    ...                               |          
        |                                      |          
        + ------------------------------------ +
                           |
                           |
         根据 bundle.js ，返回的源码中相应位置的错误


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```pwdnpm

#### devtool in webpack

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * devtool                  // webpack 默认支持 source map
 * 
 * 
 * 使用 devtool 在 webpac.config.js 中设置不同开发环境中的配置，用于改变调试时获取不同的关联信息
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * development mode         // 建议使用: eval-source-map
 * 
 * 
 * 若需要将 source map 用于开发环境，则需要注意
 */

1) 根据配置的不同，调试时报错显示的位置不同( 源文件，打包后的文件等 )

2) 根据配置的不同，调试时报错的精确成都不同( 精确，错误行等 )

3) 根据配置的不同，调时或打包时效率不同

4) ...


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * production mode
 * 
 * 
 * 若需要将 source map 部属到成产环境，则需要注意
 */

1) 避免普通用户访问

2) 应仅当作错误调试工具

3) 避免暴露源码

4) ...


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## other

#### Distinguish development environment

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 在配置 webpack.config.js 时
 * 
 * 
 * 若配置的是一个函数，则会调用该函数( env 为传入的配置命令的参数 )，将返回的内容作为配置对象
 */


module.exports = env => {

    return {
    
        // webpack config
    }
};


//-------------------------------------------------------------------------------------------------------------------//


/**
 * env
 * 
 * 
 * 利用命令设置 env 参数的值
 */


npx webpack --env development/production                // return env: "development/production"


npx webpack --env.dev                                   // return { dev: true }

npx webpack --env.dev=1                                 // return { dev: 1 }

npx webpack --env.dev=1 --env.prod=2                    // return { dev: 1, prod: 2 }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.context

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * context
 * 
 * 
 * 该配置影响入口和 loaders 解析，入口和loaders的相对路径会以 context 的配置作为基准路径
 */

module.exports = {

    context: path.resolve(__dirname, "src");
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.output.library

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * config.output.library
 * 
 * 
 * 将 webpack 打包后的结果暴露给 指定 变量( 配合其他插件使用，虽然引起了全局变量污染 )
 */

module.exports = {

    output: {
    
        library: 'finallyResult'            // 设置后，将可以在全局调用 finallyResult ( libraryTarget 控制其声明形式 )
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.output.libraryTarget

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * config.output.libraryTarget
 * 
 * 
 * 控制 output.library 如何声明
 */

var             // 默认值

window          // 暴露给 window 对象

this            // 暴露给 this 的一个属性

global          // 暴露给 global 的一个属性

coommonjs       // 暴露给 exports 的一个属性

other


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.target

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * config.target: "web"                 // default
 * 
 * 
 * 设置 webpack 打包后的代码 最终的运行环境
 */


web             // webpack 打包后的代码，最终运行在 浏览器环境中

node            // webpack 打包后的代码，最终运行在 Node 环境中

other           // webpack api


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.module.noParse

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * config.module.noParse
 * 
 * 
 * 不解析正则表达式匹配到的模块，通常用于忽略大型'单模块'( eg: jq; npm 已经打包了 jq，无需再次打包 jq )，以提高打包时的构建性能
 * 
 * 忽略的模块必须是 '单模块( 无其他依赖 )'，仅优化 webpack 打包时的构建性能
 */


module.export = {

    module: {
    
        rules: [],
        
        noParse: /Regex/g   // 对匹配到的模块不解析( 不分析依赖，抽象语法树等 )，并直接将其源代码放入 webpack 最终的打包结果返回
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.resolve.modules

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * config.resolve.modules
 * 
 * 
 * 当 require('target');     // 若引入时，没有使用 ./ 或 ../ 开头时，webpack 会从当前目录开始递归寻找默认的 node_modules
 */


module.exports = {

    resolve: ["node_modules"]                   // defualt: 设置模块的初始查找目录
};




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.resolve.extensions

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * config.resolve.extensions
 * 
 * 
 * 当解析模块时，遇到无具体后缀名的导入语句( eg: require('./target'); )，会一次测试其后缀名 .js .json .css ...
 */


module.exports = {

    resolve: {
    
        extensions: [".js", ".json", ".css"]
    }
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


require('./target');            // 未书写后缀名，为何依然可以找到 target.js 模块

因为 webpack 会自动补全后缀名


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.resolve.alias

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * onfig.resolve.alias
 * 
 * 
 * 当工程中 模块嵌套较深时，为便于 引用方便，可以利用 alias 中设置的 '目标路径变量' + '文件名'
 */

module.exports = {

    alias: {
    
        "@":  path.resolve(__dirname, "src"),           // @ === ./src
        "_": __dirname                                  // _ === ./
    }
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


require('@/target');

require('_/target');


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.externals

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * onfig.externals
 * 
 * 
 */

module.exports = {

    externals: {
    
        jquery: "$",                // module.exports = "$"
        lodash: "_"                 // module.exports = "_";
    }
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


当在 index.html 中引用第三方库( 来自于外部 CDN 等情况 )时

即可以在页面中使用 CDN，又使 bundle 的体积变得很小，还不影响源码编写


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config.stats

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * config.stats
 * 
 * 
 * 用于设置，webpack 打包时，控制台所显示的信息
 */

module.exports = {

    stats: {
    
        colors: true,                       // 是否以不同的颜色输出
        modules: false,                     // 是否添加有关已构建模块的信息
        hash: fasles,                       // 是否添加有关编译哈希的信息
        builtAt: false,                     // 是否添加构建日期及构建时间信息
        ...
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```


