var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.redirect('/chat/' + Math.floor(Math.random() * 999999999).toString());
});

router.get('/chat/:room_id', function(req, res) {
	console.log(req.params.room_id);
	res.render('index2', {
		room_id: req.params.room_id
	});
});

module.exports = router;