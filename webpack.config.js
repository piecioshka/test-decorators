const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'class-property-decorator': path.join(__dirname, 'src', 'class-property-decorator', 'scripts', 'main')
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist', 'class-property-decorator')
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
                    name: '[name].[ext]',
                },
            }
        ]
    }
};
