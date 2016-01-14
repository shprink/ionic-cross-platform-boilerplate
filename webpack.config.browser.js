var webpack = require("webpack"),
webpackConfig = require('./webpack.config.js');

webpackConfig.plugins.push(new webpack.DefinePlugin({
    IS_IOS: false,
    IS_ANDROID: false,
    IS_BROWSER: true,
    IS_DESKTOP: false
}));

module.exports = webpackConfig;
