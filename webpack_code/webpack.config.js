const path = require("path")

module.exports = {
  //入口
  entry: "./src/main.js", //相对路径
  //输出
  output: {
    //文件的输出路径
    path: path.resolve(__dirname, "dist"), //绝对路径
    //文件名
    filename: "js/main.js",
    clean: true,
  },
  //加载器
  module: {
    rules: [
      //loader的配置
      {
        test: /\.css$/,
        use: [
          //执行顺序 从右到左(从下到上)
          "style-loader", //将js中的css通过创建style标签添加到html标签中生效
          "css-loader", //将css资源编写成common.js的模块到js中
        ],
      },
      {
        test: /\.less$/,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|wenp|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            //小于10kb图片转base64
            //优点:减少请求  缺点:体积变大
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          //hash取前10位
          filename: "static/images/[hash:10][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          //hash取前10位
          filename: "static/media/[hash:10][ext][query]",
        },
      },
    ],
  },
  //插件
  plugins: [
    //plugins的配置
  ],
  //模式
  mode: "development",
}
