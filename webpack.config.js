var webpack = require('webpack');
//var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                 "plugins": ["transform-es2015-destructuring", "transform-object-rest-spread"]
              }
        },{ test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimize.UglifyJsPlugin(),
        // new CompressionPlugin({
        //         asset: "[path].gz[query]",
        //         algorithm: "gzip",
        //         test: /\.js$|\.css$|\.html$/,
        //         threshold: 10240,
        //         minRatio: 0.8
        //})
    ]
};