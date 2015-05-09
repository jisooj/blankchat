"use strict";

(function() {
	var socket = io();
	console.log('hi');
	$(document).ready(function() {
		socket.emit('change room', $('body').attr('id'));
		socket.on('message', function(msg) {
			$('#container').append($('<li>').text(msg));
         MathJax.Hub.Queue(["Typeset",MathJax.Hub,"container"]);
		});

		$('button').click(function() {
			socket.emit('message', {
				"room_id": $('body').attr('id'),
				"message_text": $('#m').val()
			});
			$('#m').val('');
			return false;
		});
	});
})();
