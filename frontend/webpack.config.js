const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
   template: "./src/index.html",
   filename: "./index.html"
 });

module.exports = {
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.styl$/, 
            loader: ['style-loader', 'css-loader', 'stylus-loader'] 
         }
      ]
   },
   plugins: [htmlPlugin]
}