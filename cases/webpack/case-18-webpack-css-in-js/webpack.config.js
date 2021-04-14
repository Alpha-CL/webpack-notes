const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: "development",
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    devServer: {
        open: true
    },
};