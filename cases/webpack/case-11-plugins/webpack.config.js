const {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: "development",
    devtool: "source-map",


    entry: {

        home: './src/index.js',
        a: './src/a.js'
    },

    output: {
        filename: "js/[name].[chunkhash:5].js"
    },

    plugins: [

        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({

            filename: 'home.html',
            template: './public/index.html',
            chunks: ['home',]
        }),
        new HtmlWebpackPlugin({

            filename: 'a.html',
            template: './public/index.html',
            chunks: ['a']
        }),
        new CopyPlugin({
            patterns: [
                {from: './public', to: './'}
            ]
        })
    ]
};