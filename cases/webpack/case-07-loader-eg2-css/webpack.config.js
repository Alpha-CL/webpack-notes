module.exports = {

    mode: "development",

    module: {

        rules: [
            {
                test: /.css$/g,

                use: [

                    {loader: "./loaders/style-loader"}
                ]
            }
        ]
    },

    devtool: "source-map"
};