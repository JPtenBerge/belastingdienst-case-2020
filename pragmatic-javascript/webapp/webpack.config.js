
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index-bundled.js',
        path: join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: () => `<!doctype html>
                <html>
                
                <head>
                    <meta charset="utf-8">
                    <title>Webpack App</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1">
                </head>
                
                <body>
                    <button id="btn-klik-hier">Klik mij nieuw</button>
                </body>
                
                </html>`
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|tiff)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/i,
                type: 'asset/resource'
            }
        ]
    }
};