// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode,
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    assetModuleFilename: "assets/[hash][ext]",
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // изображения
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "tech task",
      template: path.resolve(__dirname, "./src/template.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/img"),
          to: path.resolve(__dirname, "build/assets/img"),
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: "./",
    open: true,
    compress: true,
    port: 8080,
  },
};
