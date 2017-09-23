const  webpack = require("webpack");
const path = require('path');

var OUT_DIR = path.resolve(__dirname, "public/assets/js");
var SRC_DIR = path.resolve(__dirname, "src/js");

module.exports = {
    entry: path.resolve(SRC_DIR, 'index.js'),
    output: {
        filename: 'script.js',
        path: OUT_DIR
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: "babel-loader"},
            {test: /\.scss$/, loader: "sass-loader"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "React": "react",
            "ReactDOM": "react-dom",
            "ReactRedux": "react-redux",
            "ReactRouter": "react-router",
            "ReactRouterRedux": "react-router-redux",
            "Redux": "redux",
            "moment": "moment",

            "Actions": path.resolve(SRC_DIR, 'actions.js')
        })
    ]
};
