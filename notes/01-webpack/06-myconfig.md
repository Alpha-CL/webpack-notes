## webpack dir

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


|- npm-project
    |
    |
    |- node_modules
    |
    |- public
    |   |
    |   |- img
    |   |   
    |   |- html
    |   |
    |   |- index.html
    |   |
    |
    |
    |- src
    |   |
    |   |- assets
    |   |   |
    |   |   |- css
    |   |   |
    |   |   |- js
    |   |       |
    |   |       |- serverhot.config.js
    |   |
    |   |- index.js
    |
    |
    |
    |- .babelrc
    |
    |- .browserslistrc
    |
    |- .postcss.config.js
    |
    |- .stylelint
    |
    |- webpack.config.js
    |
    |
    |- package.json
    |
    |- package-lock.json
    |
    |- dist
    |
    |


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


mkdir ./node_modules;

mkdir -p ./public/img; 
mkdir -p ./public/html;
mkdir -p ./src/assets/css;
mkdir -p ./src/assets/js;

touch ./public/index.html;
touch ./src/index.js;
touch ./src/assets/serverhot.config.js;

touch ./.babelrc;
touch ./.browserslistrc;
touch ./.postcss.config.js;
touch ./.stylelintrc;

touch ./public/index.html;

touch webpack.config.js;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


mkdir ./node_modules; mkdir -p ./public/img;  mkdir -p ./public/html; mkdir -p ./src/assets/css; mkdir -p 
./src/assets/js; touch ./public/index.html; touch ./src/index.js; touch ./src/assets/js/serverhot.config.js; touch ./
.babelrc; touch ./.browserslistrc; touch ./.postcss.config.js; touch ./.stylelintrc; touch ./public/index.html; touch 
webpack.config.js


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## webpack config

#### webpack 

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


npm install -g webpack webpack-cli


npm install --save-dev webpack webpack-cli

npm install webpack-dev-server --save-dev


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


npm install -g webpack webpack-cli;npm install --save-dev webpack webpack-cli;npm install webpack-dev-server --save-dev;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### plugins

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


npm install --save-dev clean-webpack-plugin                 // ???????????????????????????????????????

npm install copy-webpack-plugin --save-dev                  // ???????????????????????????????????????????????????????????????

npm install --save-dev html-webpack-plugin@next             // ?????????????????????????????????????????????


npm install --save-dev html-webpack-plugin                  // ???????????????????????? index.html



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


npm install --save-dev clean-webpack-plugin;npm install copy-webpack-plugin --save-dev;npm install --save-dev html-webpack-plugin@next;npm install --save-dev html-webpack-plugin;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### loader

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


npm install file-loader --save-dev                  // ????????????????????????


npm install --save-dev css-loader                   // css ????????????

npm install --save-dev style-loader                 // ????????? css ??????html


npm install less                                    // less ??????

npm install less-loader --save-dev


npm install --save-dev postcss-loader               // ????????????

npm install --save-dev postcss postcss-cli          // ??????????????????



npm install --save-dev postcss-preset-env           // ?????????????????????

npm install postcss-apply --save-dev                // ???????????? 'css ?????????'

npm install --save-dev postcss-color-function       // ???????????????????????????????????????

npm install --save-dev stylelint                    // ?????????????????????????????????

npm install --save-dev mini-css-extract-plugin      // ?????? css ?????????????????????


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


npm install file-loader --save-dev;npm install --save-dev css-loader;npm install --save-dev style-loader;npm install less;npm install less-loader --save-dev;npm install --save-dev postcss-loader;npm install --save-dev postcss postcss-cli;npm install --save-dev postcss-preset-env;npm install postcss-apply --save-dev;npm install --save-dev postcss-color-function;npm install --save-dev stylelint;npm install --save-dev mini-css-extract-plugin;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### js compatible

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


npm install --save-dev babel-loader @babel/core @babel/cli

npm install --save-dev @babel/preset-env                                // babel ???????????????????????????

npm install --save-dev core-js regenerator-runtime                      // babel ??????????????????API????????????


// babel-plugins

npm install --save-dev @babel/plugin-proposal-class-properties          // ???????????????????????????

npm install --save-dev @babel/plugin-proposal-function-bind             // this ???????????? API

npm install --save-dev @babel/plugin-proposal-optional-chaining         // ?.: ???????????????????????????????????????????????? undefined,

npm install babel-plugin-transform-remove-console --save-dev            // ????????????????????????????????????

npm install --save-dev @babel/plugin-transform-runtime                  // ???????????????????????????????????????????????????????????????????????????


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


npm install --save-dev babel-loader @babel/core @babel/cli;npm install --save-dev @babel/preset-env;npm install --save-dev core-js regenerator-runtime;npm install --save-dev @babel/plugin-proposal-class-properties;npm install --save-dev @babel/plugin-proposal-function-bind;npm install --save-dev @babel/plugin-proposal-optional-chaining;npm install babel-plugin-transform-remove-console --save-dev;npm install --save-dev @babel/plugin-transform-runtime;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### compression

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// tree shaking

npm install terser-webpack-plugin --save-dev                        // ?????? js ??????( ???????????? )

npm install --save-dev optimize-css-assets-webpack-plugin           // ?????? css ??????


// css tree shaking

npm install --save-dev mini-css-extract-plugin                      // ?????? css ??????????????????

npm i purgecss-webpack-plugin -D                                    // ?????? ???????????? css ????????????

npm install --save glob-all                                         // ???????????? ????????????????????? ( **, *, ! ... )


// analyzer & gzip

npm install --save-dev webpack-bundle-analyzer                      // ?????????????????????????????????webpack?????????????????????

npm install compression-webpack-plugin --save-dev                   // ?????????????????????????????????????????????????????????????????????


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


npm install terser-webpack-plugin --save-dev;npm install --save-dev optimize-css-assets-webpack-plugin;npm install --save-dev mini-css-extract-plugin;npm i purgecss-webpack-plugin -D;npm install --save glob-all;npm install --save-dev webpack-bundle-analyzer;npm install compression-webpack-plugin --save-dev


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### run script

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


sed -i "" '
/&& exit 1"/ a\ 
,"build": "webpack --mode=production", 
"dev": "npx webpack-dev-server", 
"dll": "webpack --config webpack.dll.config.js"' package.json


"pcss": "npx postcss [source].pcss -o [ouput].css -w",
"less": "npx less [source].pcss -o [ouput].css -w"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## echo config

#### webpack.config.js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


echo 'const webpack = require("webpack"),
    path = require("path"),

    {CleanWebpackPlugin} = require("clean-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin"),

    MiniCssExtractPlugin = require("mini-css-extract-plugin"),

    TerserPlugin = require("terser-webpack-plugin"),

    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    PurgeCss = require("purgecss-webpack-plugin"),
    globAll = require("glob-all"),

    WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin,
    CompressionWebpackPlugin = require("compression-webpack-plugin"),

    htmlPath = path.resolve(__dirname, "public/index.html"),
    srcPath = path.resolve(__dirname, "src"),
    paths = globAll.sync([
        `${srcPath}**/*.js`,
        `${htmlPath}`
    ]);

module.exports = {
    mode: "development",
    // devtool: "source-map",
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
                include: [
                    path.resolve(__dirname, "src/assets/css/")
                ],
                use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
            },
            {
                test: /.less$/,
                include: [
                    path.resolve(__dirname, "src/assets/css/")
                ],
                use: [MiniCssExtractPlugin.loader, "css-loader?modules", "less-loader"]
            },
            {
                test: /\.(jpe?g)|(png)|(gif)$/,
                exclude: [
                    path.resolve(__dirname, "node_modules/")
                ],
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
            chunks: ["main"]
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
        new PurgeCss({
            paths
        }),
        // new WebpackBundleAnalyzer(),
        new CompressionWebpackPlugin({
            filename: "[file].[ext].gz"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                styles: {
                    minSize: 0,
                    test: /\.css$/,
                    minChunks: 2
                }
            }
        },
        // minimize: true,
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin(),
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
};' > ./webpack.config.js



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### .babelrc

``` javascriptMiniCssExtractPlugin.loader, 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


echo '{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-function-bind"
    ],
    [
      "@babel/plugin-proposal-optional-chaining"
    ],
    [
      "@babel/plugin-transform-runtime"
    ]
  ]
}' > ./.babelrc


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### .browserslistrc

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


echo 'last 1 version
> 1%
not ie <= 8' > ./.browserslistrc


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### .postcss.config.js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


echo 'module.exports = {
    map: false,
    plugins: {
        "postcss-preset-env": {
            stage: 1,
            preserve: false,
        },
        "postcss-apply": {},
        "postcss-color-function": {},
        // "stylelint": {}
    }
};' > ./.postcss.config.js


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### .stylelintrc

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


echo '{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": null
  }
}' > ./.stylelintrc


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### serverconfig.js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ?????????????????????


if (module.hot) {

    module.hot.accept();
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


echo 'export const moduleHot = function () {

    if (module.hot) {

        module.hot.accept();
    }
};' > ./src/assets/serverhot.config.js


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### index.js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


echo 'import {moduleHot} from "./assets/serverconfig.js";
moduleHot();' > ./src/index.js


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### index.html

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>' > ./public/index.html


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## module-html

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


npm i --S jquery

$('dom').load("html-module-path");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```
