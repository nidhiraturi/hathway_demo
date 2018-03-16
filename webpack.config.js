const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: {
    server: './src/server.ts'
},
resolve: {
    extensions: ['.ts', '.js']
},
target: 'node',
plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.\.\/environments\/environment/, '../environments/environment.prod')
],
node: {
  __dirname: false,
  __filename: false
},
output: {
    path: path.join(__dirname, 'dist'),
  filename: '[name].js'
},
module: {
    rules: [
     { test: /\.ts$/, loader: 'ts-loader' }
 ]
}
}
