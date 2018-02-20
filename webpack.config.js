let path = require('path');
let HTMLwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
        devServer: {
        contentBase: './dist'
    },
    devtool: 'inline-source-map',
    plugins: [new HTMLwebpackPlugin({
        minify: {
            collapseWhitespace: true,
        },
        template: path.resolve(__dirname, 'src/index.ejs')
    })]
}