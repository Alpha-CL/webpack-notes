const {CleanWebpackPlugin} = require("clean-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    webpack = require("webpack"),
    path = require("path"),
    TerserPlugin = require("terser-webpack-plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    MiniCss = require("mini-css-extract-plugin"),
    PurgeCss = require("purgecss-webpack-plugin"),
    globAll = require("glob-all"),
    htmlPath = path.resolve(__dirname, "public/index.html"),
    srcPath = path.resolve(__dirname, "src"),
    paths = globAll.sync([
        `${srcPath}**/*.js`,
        `${htmlPath}`
    ]);

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: {
        main: "./src/index.js"
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
            chunks: ["main"],
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
        new webpack.HotModuleReplacementPlugin(),
        new MiniCss(),
        new PurgeCss({
            paths
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all",                              // 用于设置所有 chunk 都使用 分包策略
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
        },
        // minimize: true,                              // 是否启用压缩，默认生产环境自动开启
        minimizer: [                                    // 设置压缩时，匹配的插件集合数组

            new TerserPlugin(),                         // 针对 js 压缩( 默认已有 )
            new OptimizeCSSAssetsPlugin(),              // 针对 css 压缩
        ]
    },
    devServer: {
        open: true,
        hot: true,
        index: "index.html",
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        entrypoints: false,
    }
};
