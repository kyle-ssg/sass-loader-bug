// webpack.config.dev.js
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    mode: "development",
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false',
        './web/main.js',
    ],
    devServer: {
        outputPath: __dirname
    },
    output: {
        path: '/',
        publicPath: 'http://localhost:8080/build/',
        filename: '[name].js'
    },
    plugins: require('./plugins').concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]),
    module: {
        rules: require('./loaders')
            .concat([
                {
                    test: /\.js?/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.scss$/,
                    use: [{
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                            convertToAbsoluteUrls: false,
                        },
                    },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                            },
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        }],
                },
            ])
    },
};
