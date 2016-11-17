var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'COSKA REACT',
    template: './app/index.html'
  })],
  //devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
		        query: {
		          presets:['react', 'es2015']
		        }
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.(png|jpg|ttf|eot|woff|svg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000'
			}
		]
	},
}
