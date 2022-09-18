const path = require("path")
const { DefinePlugin } = require("webpack")
const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

const getStyleLoaders = (preProcessor) => {
  return [
    "vue-style-loader",
    "css-loader",
    // {
    //   loader: "postcss-loader",
    //   options: {
    //     postcssOptions: {
    //       plugins: [
    //         "postcss-preset-env", // 能解决大多数样式兼容性问题
    //       ],
    //     },
    //   },
    // },
    preProcessor,
  ].filter(Boolean)
}
module.exports = {
  entry: "./src/main.js",
  output: {
    path: undefined,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetModuleFilename: "static/media/[hash:10][ext][query]",
  },
  module: {
    rules: [
      //处理css
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders("sass-loader"),
      },
      //处理图片
      {
        test: /\.(png|jpe?g|gif|wenp|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      },
      //处理其他资源
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
      },
      //处理js
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "../src"),
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          //plugins: ["react-refresh/babel"],
        },
      },
      //处理vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules",
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  mode: "development",
  devtool: "cheap-module-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },
  },
  resolve: {
    extensions: [".vue",".js",".json"],
  },
  devServer: {
    host: "localhost",
    port: 3002,
    open: true,
    hot: true,
    historyApiFallback: true, //前端路由刷新404
  },
}
