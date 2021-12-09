const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
      manifest: path.resolve(__dirname, "public", "manifest.json"),
    }),
  ],
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "./"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        ],
      },
      // {
      // test: /\.(sa|sc|c)ss$/,
      //   include: path.resolve(__dirname, "src"),
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: (resourcePath, context) => {
      //           return path.relative(path.dirname(resourcePath), context) + "/";
      //         },
      //         hmr: process.env.NODE_ENV !== "production",
      //       },
      //     },
      //     "css-loader",
      //     {
      //       loader: `postcss-loader`,
      //       options: {
      //         options: {},
      //       },
      //     },
      //     "url-loader",
      //   ],
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader?url=false" },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "file-loader",
        options: {
          name: "/public/icons/[name].[ext]",
        },
      },
      {
        test: /\.json$/i,
        loader: "file-loader?name=[name].[ext]",
      },
    ],
  },
};
