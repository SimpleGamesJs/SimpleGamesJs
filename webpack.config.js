var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var helpers = require('./helpers')

module.exports = {
    entry: {
        'polyfills': './client/polyfills.ts',
        'vendor': './client/vendor.ts',
        'app': './client/bootstrap.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: __dirname + '/client/build',
        filename: '[name].js',
    },

    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('client', 'app'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.css$/,
                include: helpers.root('client', 'app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'client/index.html'
        })
    ]
}