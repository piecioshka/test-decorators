const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'class-decorator': path.join(__dirname, 'src', 'class-decorator', 'main'),
        'class-property-decorator': path.join(__dirname, 'src', 'class-property-decorator', 'main'),
        'class-method-decorator': path.join(__dirname, 'src', 'class-method-decorator', 'main'),
        'class-method-parameter-decorator': path.join(__dirname, 'src', 'class-method-parameter-decorator', 'main'),
        'class-accessor-decorator': path.join(__dirname, 'src', 'class-accessor-decorator', 'main'),
    },
    output: {
        filename: '[name]/bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[folder]/[name].[ext]',
                },
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: 'src/index.html', to: 'index.html' },
        ]),
    ],
};
