const {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    devtool: "source-map",
    output: {
        filename: "script/[name].[chunkhash:5].js"
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g)|(gif)$/,
                use: [{
                    loader: "file-loader",              // principle: require('file-loader')
                    options: {
                        name: 'imgs/[name].[contenthash:5].[ext]'
                    }
                }]
            },
            {
                test: /\.png$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: 'imgs/[name].[contenthash:5].[ext]',
                        limit: 100 * 1024
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        open: true
    },
    stats: {
        colors: true,
        modules: false
    }
};