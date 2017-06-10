const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

const PATHS = {
    src         : path.resolve(__dirname, 'front/src'),
    front        : path.resolve(__dirname, 'front'),
    node_modules: path.resolve(__dirname, 'node_modules')
};

const options = {
    production  : (process.env.NODE_ENV === 'production'),
    port        : 3000
};

module.exports = ((options) => {
    let webpackConfig = {};

    webpackConfig.entry = {
        app: 
        [
            `babel-polyfill`,
            path.resolve(PATHS.front, "index.jsx")
        ]
    };

    webpackConfig.output = {
        path        : PATHS.dist,
        publicPath  : './',
        filename    : "bundle.js"
    };

    webpackConfig.devtool = options.production ? "nosources-source-map" : "cheap-module-source-map";

    webpackConfig.plugins = [
        new webpack.ProgressPlugin(function (percentage, msg) {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(`${(percentage * 100).toFixed(2)}% ${msg}`);
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': options.production ? JSON.stringify('production') : JSON.stringify('development')
        //     },
        //     __PRODUCTION__  : JSON.stringify(options.production),
        //     __SOCKET_URL__  : JSON.stringify(config.socketURL),
        //     __API_URL__     : JSON.stringify(config.apiURL)
        // }),
        new ExtractTextPlugin("style.css")
    ];

    if(options.production){
        webpackConfig.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compressor: {
                    warnings: false
                },
                sourceMap: false
            })
        );
    } else {
        webpackConfig.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    }

    webpackConfig.module = {
        rules: [
            {
                test    : /\.css$/,
                include : path.resolve(PATHS.front, 'css'),
                loader  : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
            },
            {
                test    : /\.json$/,
                loader  : 'file-loader',
                include : path.resolve(PATHS.assets, 'json'),
                options : {
                    context : PATHS.assets,
                    name    : '[path][name].[ext]'
                }
            },
            {
                test    : /\.(js|jsx)$/,
                loader  : 'babel-loader',
                include : PATHS.src
            }
        ]
    };

    webpackConfig.resolve = {
        enforceExtension: false,
        extensions: [".js", ".jsx", ".json"],
        modules: ["node_modules"],
        alias: {
            app         : PATHS.src,
            actions     : path.resolve(PATHS.src, 'actions'),
            assets      : path.resolve(PATHS.src, 'assets'),
            components  : path.resolve(PATHS.src, 'components'),
            constants   : path.resolve(PATHS.src, 'constants'),
            stores      : path.resolve(PATHS.src, 'stores'),
            utilities   : path.resolve(PATHS.src, 'utilities')
        }
    };

    return webpackConfig;
})(options);
