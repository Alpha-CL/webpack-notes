let MyPlugin = require('./plugins/MyPlugin.js');

module.exports = {

    mode: "development",
    devtool: "source-map",

    plugins: [

        new MyPlugin()
    ]
};