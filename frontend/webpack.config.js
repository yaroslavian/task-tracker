const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
   template: './src/index.html',
   filename: './index.html'
});

module.exports = {
   devServer: {
      historyApiFallback: true,
      proxy: {
         '/api': 'http://localhost:3000'
      }
   },
   output: {
      publicPath: '/'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.styl$/,
            loader: ['style-loader', 'css-loader', 'stylus-loader']
         },
         {
            test: /\.ts$/,
            loader: ['ts-loader']
         }
      ]
   },
   plugins: [htmlPlugin]
};