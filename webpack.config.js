const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
