const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./dist/index.html",
 filename: "./index.html"
});

const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.png', '.jpg'],
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            exclude: [/node_modules/, /dist/],
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
    ]},
    plugins: [htmlPlugin],
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 5000
    }
};