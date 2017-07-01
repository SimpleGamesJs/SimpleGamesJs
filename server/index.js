const path 		= require('path');
const express 	= require('express');
const app 		= express();

const routes 	= require('./routes');

		
global.PATH  = {
	app: 	__dirname,
	front: 	path.join(__dirname, 'front')
}

app.use('', express.static(path.join(PATH.front, 'dist')));
app.use('/', routes);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});