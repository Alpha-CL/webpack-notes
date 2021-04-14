module.exports = {

    mode: "development",

    module: {

        rules: [

            {
                test: /index\.js$/,

                use: ['./loaders/loader1', './loaders/loader2']
            },

            {
                test: /.js$/,

                use: ['./loaders/loader3', './loaders/loader4']
            }
        ]
    }
};