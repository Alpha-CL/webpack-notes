const {CleanWebpackPlugin} = require("clean-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader?modules", 'less-loader'],
            },
            {
                test: /\.(jpe?g)|(png)|(gif)$/,
                use: "file-loader",
            }
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
