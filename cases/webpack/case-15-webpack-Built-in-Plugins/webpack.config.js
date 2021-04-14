const webpack = require('webpack');

module.exports = {

    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            PI: `Math.PI`,
            VERSION: `"1.0.0"`,
            DOMAIN: JSON.stringify('demo.com')
        }),
        new webpack.BannerPlugin({
            banner: `
            hash: [hash]
            chunkhash: [chunkhash]
            name: [name]
            author: [author]
            corporation: demo`
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ],
};