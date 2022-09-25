//const { path } = require("express/lib/application");
const path = require('path'); 
// const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
// const { builtinModules } = require('module');

module.exports = {
    mode: 'development', 
    entry: './client/index.jsx', 
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js', 
    },
    target: 'node',
    resolve: {extensions: ['.jsx', '.js', '.json']}, 
      plugins: [
        new HtmlWebpackPlugin({
          template: './client/index.html',
        })
      ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
            {
              test: /\.css$/, 
              use: ["style-loader", 'css-loader'], 
          },
        ],
    },
}; 

//removed from under resolved 

   // loaders
    
    // module: {
    //     rules: [
    //       {
    //         test: /\.jsx?/,
    //         exclude: /node_modules/,
    //         loader: 'babel-loader',
    //         options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
    //       },
    //       {
    //         test: /\.s[ac]ss$/i,
    //         use: [
    //           // Creates `style` nodes from JS strings
    //           'style-loader',
    //           // Translates CSS into CommonJS
    //           'css-loader',
    //           // Compiles Sass to CSS
    //           'sass-loader',
    //         ],
    //       },
    //     ],
    //   },






  //   module.exports = {
  //     mode: 'development', 
  //     entry: './client/index.jsx', 
  //     output: {
  //         path: path.resolve(__dirname, 'build'), 
  //         filename: 'bundle.js', 
  //     },
  //     target: 'node',
  //     resolve: {extensions: ['.jsx', '.js', '.json']}, 
  //       plugins: [
  //         new HtmlWebpackPlugin({
  //           template: './client/index.html',
  //         })
  //       ],
  //     module: {
  //         rules: [
  //             {
  //                 test: /\.(js|jsx)$/,
  //                 exclude: /node_modules/,
  //                 use: {
  //                     loader: 'babel-loader', 
  //                     options: {
  //                         presets: ['@babel/preset-env', '@babel/preset-react']
  //                     },
  //                 },
  //             },
  //             {
  //               test: /\.css$/, 
  //               use: ["style-loader", 'css-loader'], 
  //           },
  //         ],
  //     },
  // }; 