//const { path } = require("express/lib/application");
const path = require('path'); 
// const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { builtinModules } = require('module');

module.exports = {
    mode: 'development', 
    entry: './client/index.js', 
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js', 
    },
    target: 'node',
    // resolve: {extensions: ['.jsx', '.js', '.json']}, 
    //loaders
    
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin({template: './index.html'})],
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/, 
    //             use: ["style-loader", 'css-loader'], 
    //         },
    //         {
    //             test: /\.(js|jsx)$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: 'babel-loader', 
    //                 options: {
    //                     presets: ['@babel/preset-env', '@babel/preset-react']
    //                 },
    //             },
    //         },
    //     ],
    // },
}; 