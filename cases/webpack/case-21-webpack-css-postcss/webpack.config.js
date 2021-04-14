const {CleanWebpackPlugin} = require("clean-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "js/[name].[chunkhash:5].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader?modules"],
            },
            {
                test: /\.(jpe?g)|(png)|(gif)$/,
                use: "file-loader",
            },
            {
                test: /.pcss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader?modules", "postcss-loader"]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new CopyPlugin({
            patterns: [
                {from: "./public", to: "./"},
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css"
        })
    ],
    devServer: {
        open: true,
        index: "index.html",
    },
    stats: {
        colors: true,
        modules: false,
    },
};
