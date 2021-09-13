const path = require('path');

module.exports = {
    mode: 'development', // 给开发者看的, production 给用户看
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
};