const webpack = require("webpack"),
    path = require("path");

module.exports = {
    mode: "production",
    entry: {
        jquery: ["jquery"],
        lodash: ["lodash"]
    },
    output: {

        filename: "dll/[name].js",
        library: "[name]",                  // 每个 bundle 暴露的全局变量名
        libraryTarget: "var"                // 全局暴露变量的方式，默认: var
    },
    plugins: [
        new webpack.DllPlugin({

            path: path.resolve(__dirname, "dll", "[name].manifest.json"),           // 生成资源清单
            name: "[name]"                                                          // 源清单中暴露的全局变量名规则
        })
    ]
};