let FileListPlugin = require('./Plugins/FileListPlugin.js');

module.exports = {

    mode: "development",
    devtool: "source-map",

    plugins: [

        new FileListPlugin(),
    ]
};