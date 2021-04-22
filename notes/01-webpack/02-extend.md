## webpack Plugins

#### clean-webpack-plugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * clean-webpack-plugin
 * 
 * 
 * 清除 webpack 打包的 '重复代码文件'
 */

npm install --save-dev clean-webpack-plugin


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const {CleanWebpackPlugin} = require('clean-webpack-plugin');               // 引入插件模块

module.exports = {

    mode: "development",
    devtool: "source-map",

    output: {
        filename: "[name].[chunkhash:5].js"
    },

    plugins: [

        new CleanWebpackPlugin()
    ]
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### html-webpack-plugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * html-webpack-plugin
 * 
 * 
 * 自动根据指定文件生成 html 文件               // 有很多功能
 */

npm i --save-dev html-webpack-plugin


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {

  entry: 'index.js',
  
  output: {
  
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  
  plugins: [
  
    new HtmlWebpackPlugin()
  ]
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### copy-webpack-plugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * copy-webpack-plugin
 * 
 * 
 * 用于复制指定静态资源到指定目录
 */

npm install copy-webpack-plugin --save-dev


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const CopyPlugin = require('copy-webpack-plugin');
 
module.exports = {

  plugins: [
  
    new CopyPlugin({
    
      patterns: [
      
        { from: 'source', to: 'dest' },
        { from: 'other', to: 'public' },
      ],
      
    }),
  ],
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### webpack-dev-server

[webpack-dev-server](https://webpack.js.org/configuration/dev-server/#root)

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * webpack-dev-server                   // 几乎支持所有 webpack cli 的参数
 * 
 * 
 * webpack 官方制作的一个库，用于模拟服务器环境
 */

npx webpack-dev-server


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 模拟内部实现

1) 内部执行 webpack 命令，传递命令参数

2) 开启 watch ( 监听文件的变化 )

3) 注册 hooks( 类似于 plugin ): webpack-dev-server 会向 webpack 中注册一些 hooks 函数，主要功能如下

    1. 将资源列表( assets ) 保存起来
    
    let assets = compolation.assets = {
    
        'index.html': '<html>...</html>'
        'script/main.14321.js': '(function(){}())'
    }
    
    2. 禁止 webpack 输出文件

4) 用 express 开启一个服务器，监听某个端口( 默认: 8080 )，当请求到达后，根据请求的文件路径，返回相应的资源内容


//-------------------------------------------------------------------------------------------------------------------//


const {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: "development",
    devtool: "source-map",

    output: {

        filename: "js/[name].[chunkhash:5].js"
    },
    plugins: [

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({

            template: './public/index.html'
        })

    ],
    devServer: {

        port: 8000,                 // 修改监听的端口号
        open: true,                 // 模拟完成后，自动打开服务器部属的页面
        index: 'index.html',        // 修改服务器默认的启动页面

        proxy: {                    // 设置代理( 原理: node 利用设置的代理地址 请求并返回结果 )

            // "/api": 'http://open.duyi.com'          // regex: address       此种方法: 部分浏览器需要确认 host 才允许访问

            "/api":{

                target: 'http://open.duyi.com',

                changeOrigin: true                      // 更改 请求头 中的 host & origin，便于服务器验证
            }
        }
    },
    stats: {

        colors: true,
        modules: false
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## Resolve Path

#### file-loader

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * file-loader                  // 生成依赖文件保存至输出目录，导入该文件时，返回该文件的路径
 * 
 * 
 * 将文件上的/ file-loader解析为url，然后将文件发送到输出目录。importrequire()
 */

npm install file-loader --save-dev


import img from './file.png';


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


module.exports = {

    module: {

        rules: [

            {
                test: /\.(png|jpe?g|gif)$/i,
                
                use: [

                    {loader: 'file-loader',},
                    
                    options: {
                    
                        name: '[path][name].[ext]',
                    },
                ],
            },
        ],
    },
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### url-loader

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * url-loader                   // 根据文件，将文件转换并导出 base64 格式的字符串
 * 
 * 
 * url-loader的工作方式类似于 file-loader，但是如果文件小于字节限制，则可以返回 DataURL
 */

npm install url-loader --save-dev


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


module.exports = {

    module: {

        rules: [

            {
                test: /\.(png|jpg|gif)$/i,

                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Solve the path problem

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 在使用 file-loader 或 url-loader 时，无法判断各类型资源的路径
 * 
 * 
 * 
 */

根本原因: 模块中的路径来自于与某个 loader 或 plugin，当产生路径时，loader 或 plugin 只有相对于 dist 目录的路径

并不知道该路径将在哪个资源中使用，从而无法确定最终正确的路径


resolve: 配置 webpack 的 publicPath 解决


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


dist
    |-- img
        |-- a.png           # file-loader 生成的文件
    |-- script
        |-- main.js         # export default 'img/a.png'
    |-- html
        |-- index.html      # <script src="../scripts/mian.js"></script>


//-------------------------------------------------------------------------------------------------------------------//


/**
 * publicPath: ""           // 本身并无用途和意义
 * 
 * 
 * webpack 内部会默认为 publicPath 创建一个 空串，但其并不使用
 * 
 * 仅部分需要用到 publicPath 的 loader 或 plugin 会调用该属性的值，并使用
 * 
 * ( 部分默认使用: loader 或 plugin 会将 publicPath.value + exporedFilePath )
 */

// __webpack_public_path__

__webpack_require__.p = "";


// 打包后: __webpack_public_path__ 会被内部转换 为 __webpack_require__.p

console.log(__webpack_public_path__);   =>    console.log(__webpack_require__.p)


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 配置统一的 publicPath
 * 
 * 
 * webpack 中 所有的 loader 或 plugin 都可以调用
 */

// 因最终资源是放置在服务器上，以  '/' 开头代表 服务器根目录( 并代表绝对路径 )


output: {

    filename: "[name].[chunkhash:5].js",
    
    publicPath: "/"             // 会将 '/' + imgs/webpack.png => /imgs/webpack.png
},


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 为某个 loader 或 plugin 单独配置 publicPath
 * 
 * 
 * 因 loader 或 plugin 所需要在服务器中不同的位置
 */

module: {
    rules: [
        {
            test: /\.(jpe?g)|(png)|(gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: 'imgs/[name].[contenthash:5].[ext]'，
                        
                        publicPath: '../'           // 仅作用于 loader
                    }
                }
            ]
        }
    ]
},


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## Built-in plugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


所有的 webpack 内置插件都作为 webpack 的静态属性存在，使用下面的方式可创建一个插件对象

const webpack = require('webpack');

new webpack.PluginName(options);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### webpack.DefinePlugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * DefinePlugin
 * 
 * 
 * 全局常量定义插件，使用该插件通常定义一些常量值，例如
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 这样以来，就可以直接使用插件提供的常量，当 webpack 编译完成后，会自动替换为常量

new webpack.DefinePlugin({

    // 赋予的是值，而不是字符串

    PI: `Math.PI`,                          // PI = Math.PI         
    VERSION: `"1.0.0"`,                     // VERSION = "1.0.0"
    DOMAIN: JSON.stringify('demo.com')
})


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const webpack = require('webpack');

module.exports = {

    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            PI: `Math.PI`,
            VERSION: `"1.0.0"`,
            DOMAIN: JSON.stringify('demo.com')
        })
    ],
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### webpack.BannerPlugin

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * BannerPlugin
 * 
 * 
 * 为每个 chunk 生成的文件头部添加一行注释，一般用于添加作者、公司、版权信息等
 */

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const webpack = require('webpack');

module.exports = {

    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.BannerPlugin({
            banner: `
            hash: [hash]
            chunkhash: [chunkhash]
            name: [name]
            author: [author]
            corporation: demo`
        }),
    ],
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### webpack.ProvidePlugin


``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * ProvidePlugin
 * 
 * 
 * 当某些第三方模块使用非常频繁( eg: jquery, lodash ...)，为了避免在多个模块中频繁加载 第三方 模块
 * 
 * 全局配置 webpack.ProvidePlugin 后，可在 模块中可直接使用第三方模块，而无需再次加载
 */

const webpack = require('webpack');

module.exports = {

    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ],
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 执行原理

(function (module, exports, __webpack_requore__) {

    (function ($, _) {

        $('img');

        _.drop([1, 2, 3], 2);

    }.call(this, __webpack_requore__('jquery.js'), __webpack_requore__('lodash.js')));

}());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```