const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

const config = {
    entry: {
        index: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    target: ['browserslist', 'es5'],
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.scss'],
        mainFiles: ['index.js', 'index.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]/index.css',
            chunkFilename: '[id].css'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            exportLocalsConvention: 'camelCase',
                            localIdentName: '[name]__[local]__[hash:base64:6]'
                        }
                    }
                }
            ]
          },
          {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:6]'
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ]
          },
          {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            type: 'javascript/auto',
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    compact: false,
                    plugins: []
                }
            }]
          }
        ]
    }
};

module.exports = config;
