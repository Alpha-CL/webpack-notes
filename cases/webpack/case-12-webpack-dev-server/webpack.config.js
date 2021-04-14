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