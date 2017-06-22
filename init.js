const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');
const routes = require('./server/routes');

const 	app 			= express(),
		compiler 		= webpack(config),
		isDevelopment 	= process.env.NODE_ENV !== 'production';
		
global.PATH  = {
	app: 	__dirname,
	front: 	path.join(__dirname, 'front')
}

if (isDevelopment) {

	app.use(webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	}));
	app.use(webpackHotMiddleware(compiler));
}

app.use('', express.static(path.join(PATH.front, 'dist')));
app.use('/', routes);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});