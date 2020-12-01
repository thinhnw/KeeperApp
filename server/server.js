// jshint esversion:6
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public', 'index.html'));
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, function(req, res) {
	console.log(`Server is listening to port ${PORT}`);
});
