var webpack = require("webpack"),
webpackConfig = require('./webpack.config.js');

webpackConfig.plugins.push(new webpack.DefinePlugin({
    IS_IOS: true,
    IS_ANDROID: false,
    IS_BROWSER: false,
    IS_DESKTOP: false
}));

module.exports = webpackConfig;
