const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

/** @type {import('webpack').Configuration} */
const webpackConfiguration = {
  entry: {
    main: path.join(__dirname, "src", "index.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, ".")],
    extensions: [".js", ".ts"],
  },
  plugins: [new NodemonPlugin()],
};

module.exports = webpackConfiguration;
