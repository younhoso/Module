var path = require('path'); //path 라이브러리 불러오기
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './javascript/main.js',    // 번들링할 대상을 말한다.
  output: {                         // 번들링을 했을때 나오는 결과물
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')   //__dirname라고한것을 절대경로를 현재 폴더까지 생략해서 __dirname라고만 칭하는 것이다. 
  },
  module: {
    rules: [
        { // scss
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        { //babel es2015
          test: /\.js$/,
          include: path.resolve(__dirname, 'dist'),
          use: {
            loader:'babel-loader',
            options: {
              presets: ['es2015', {modules: false}]
            }
          }
        },
        { // images
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                  limit: 5000,
                  name: '[path][name].[ext]',
                  outputPath: 'dist-img/'
              }
            }
          ]
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
			filename: 'styles.css',
      chunkFilename: "style.chunk.css",
      hot: true,
      orderWarning: true,
      reloadAll: true,
      cssModules: true
		})
  ]
};