const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "[name].[chunkhash:5].js",
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    devServer: {
        open: true
    },
    module: {
        rules: [
            {
                /**
                 * 执行顺序 css-loader -> style-loader      // 倒序( 必须先执行 css-loader 再执行 style-loader )
                 *
                 * css-loader: 将 css代码转换为 字符串导出，使 webpack 可以将 css 代码作为 js 代码运行
                 * style-loader: 将转换后的结果加入到页面的 style 标签中
                 */

                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpg$/,
                use: 'file-loader'
            }
        ]
    },
};