var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval', // developer tool to enhance debugging
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./src/app.jsx'
	],
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: '/public/',
		filename: 'Assets/js/app.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			testUtils: path.join(__dirname, "test/testUtils"),
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			}
		]
	}
};