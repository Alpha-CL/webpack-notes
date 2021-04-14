const {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "script/[name].[chunkhash:5].js",
        publicPath: "/"
    },
module: {
    rules: [
        {
            test: /\.(jpe?g)|(png)|(gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: 'imgs/[name].[contenthash:5].[ext]'
                    }
                }
            ]
        }
    ]
},
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'html/index.html'
        })
    ],
    devServer: {
        open: true,
        openPage: '/html/index.html'
    },
    stats: {
        colors: true,
        modules: false
    }
};