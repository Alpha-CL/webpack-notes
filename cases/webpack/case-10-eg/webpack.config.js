const baseConfig = require('./webpack.base'),
    prodConfig = require('./webpack.prod'),
    devConfig = require('./webpack.dev');

module.exports = function (env) {

    if (env && env.prod) {

        return {

            // mode: "production",
            // devtool: "none"

            ...baseConfig,
            ...prodConfig
        };

    } else {

        return {

            // mode: "development",
            // devtool: "source-map"

            ...baseConfig,
            ...devConfig
        };
    }
};