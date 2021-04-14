module.exports = {

    mode: "development",

    module: {

        rules: [

            // {
            //     test: /\.jpg$/g,
            //     use: ['./loaders/img-loader-1.js']
            // },
            // {
            //     test: /\.png$/g,
            //     use: ['./loaders/img-loader-2.js']
            // },

            {
                test: /\.(jpg)|(png)$/,
                use: [{

                    loader: './loaders/img-loader-3.js',
                    options: {
                        limit: 10000,    // 3000字节以上使用图片，3000字节以下使用base64
                        filename: "img-[contenthash:5].[ext]"
                    }
                }]
            }
        ]
    },

    devtool: "source-map"
};