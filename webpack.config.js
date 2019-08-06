const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-proposal-class-properties"]
					}
				}
			}
		]
	},
	devServer: {
		port: 3000,
		proxy: {
			"/api/**": {
				target: "http://localhost:6200"
			}
		}
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};
