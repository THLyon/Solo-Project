//const { path } = require("express/lib/application");
const path = require('path'); 
const webpack = require('webpack'); 
//const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development', 
    entry: './client/index.js', 
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js', 
    },
    target: 'node',
    //loaders
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", 'css-loader'], 
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
        ],
    },
}; 