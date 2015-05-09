var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index');
});

router.get('/:room_id', function(req, res) {
	console.log(req.params.room_id);
	res.render('index', {
		room_id: req.params.room_id
	});
})

module.exports = router;