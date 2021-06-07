const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    };

    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin
        ]
    }

    return config
};

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.jsx',
        test: './test.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Drum machine',
            template: './template.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ],
            options: {
                concurrency: 50
            }
    })
    ],
    resolve: {
        extensions: ['.js', '.json', '.scss', 'sass', '.html'],
        alias: {
            '@SCSS': path.resolve(__dirname, './src/scss'),
            '@global': path.resolve(__dirname, './src/jsx/global'),
            '@redux': path.resolve(__dirname, './src/jsx/redux'),
            '@react': path.resolve(__dirname, './src/jsx/react')
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        
                    }
                },
                'css-loader',
                'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                    }
                }
            }
        ]
    },
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 3003,
        writeToDisk: true,
    },
    optimization: optimization()
}