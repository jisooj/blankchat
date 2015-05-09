"use strict";

(function() {
	var socket = io();
	console.log('hi');

	$(document).ready(function() {
		socket.emit('change room', $('body').attr('id'));
		socket.on('message', function(msg) {
			$('#messages').append($('<li>').text(msg));
		});


		$('button').click(function() {
			socket.emit('message', {
				"room_id": $('body').attr('id'),
				"message_text": $('#m').val()
			});
			$('#m').val('');
			return false;
		})
	});
})();
