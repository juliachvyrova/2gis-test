var webpack = require("webpack");

var autoprefixer = require('autoprefixer');

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }, {
            test: /\.handlebars$/,
            loader: "handlebars-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "2gis Test"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    postcss: function() {
        return [autoprefixer];
    }
};