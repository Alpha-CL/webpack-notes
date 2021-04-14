const {CleanWebpackPlugin} = require("clean-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    webpack = require("webpack"),
    path = require("path");

module.exports = {
    mode: "development",
    // devtool: "source-map",
    entry: {
        main: "./src/index.js",
        page1: "./src/assets/js/page1.js",
        page2: "./src/assets/js/page2.js",
    },
    output: {
        filename: "js/[name].[hash:5].js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
            },
            {
                test: /.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader?modules", "less-loader"]
            },
            {
                test: /\.(jpe?g)|(png)|(gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules/lodash")
                ],
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            chunks: ["page1"],
        }),
        new CopyPlugin({
            patterns: [
                {from: "./public", to: "./"},
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css",
            chunkFilename: "common.[chunkhash:5].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all",                              // 用于设置所有 chunk 都使用 分包策略

            // automaticNameDelimiter: ".",       // 用于设置新建 chunk 名称的分隔符( 默认值: ~ )
            // minChunks: 1,           // 用于提取公共模块，当 公共代码 被多少模块引用时，才被提取为公共模块分包( 默认值: 1 )
            // minSize: 300000,        // 用于提取公共模块，当 公共代码 达到多少字节时，才被提取为公共模块分包( 默认值: 300000 )

            cacheGroups: {

                // 属性名为缓存组名称，影响分包的 chunk 名
                // 属性值巍峨缓存组配置，缓存组集成所有的全局配置，也有自己特殊的配置

                vendors: {
                    test: /[\\/]node_modules[\\/]/,     // 当匹配到相应模块时，将这些模块进行单独打包
                    priority: -10                       // 缓存组优先级，优先级越高，该策略越优先处理，默认为 0
                },
                default: {
                    minChunks: 2,                       // 覆盖全局配置，将最小 chunk 引用数改为 2
                    priority: -20,                      // 缓存组优先级
                    reuseExistingChunk: true            // 重用已被分离出去的 chunk
                },
                styles: {
                    minSize: 0,
                    test: /\.css$/,
                    minChunks: 2
                }
            }
        }
    },
    devServer: {
        open: true,
        hot: true,
        index: "index.html",
    },
    stats: {
        colors: true,
        chunks: false,
        modules: false,
        children: false,
        entrypoints: false
    }
};
