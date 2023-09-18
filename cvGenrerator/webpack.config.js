const path = require('path');

module.exports = {
    mode: 'development',
     entry: {
       index: './src/index.js',
     },
     plugins: [
       new HtmlWebpackPlugin({
        title: 'Development',
       }),
     ],
     output: {
       filename: '[name].bundle.js',
       path: path.resolve(__dirname, 'dist'),
       clean: true,
     },
     
     module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
   };