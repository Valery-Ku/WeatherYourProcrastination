const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path'); 

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build"),
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "assets/style.css",
        }),
   ], 
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]",
                },
            },
          ],
    },
    optimization: {
      minimizer: [
          "...",
          new ImageMinimizerPlugin({
              test: /\.(png|jpe?g|gif|svg)$/i,
              minimizer: {
                  implementation: ImageMinimizerPlugin.imageminMinify,
                  options: {
                      plugins: [
                          ["gifsicle", { interlaced: true }],
                          ["jpegtran", { progressive: true }],
                          ["optipng", { optimizationLevel: 5 }],
                      ],
                  },
              },
          }),
      ],
  },
};