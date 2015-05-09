"use strict";

(function() {
	var socket = io();
	console.log('hi');
	$(document).ready(function() {
		socket.emit('change room', $('body').attr('id'));
		socket.on('message', function(msg) {
			$('#container').append($('<div>').text(msg));
        	MathJax.Hub.Queue(["Typeset",MathJax.Hub,"container"]);
		});

		$('textarea').bind("submit", function() {
			socket.emit('message', {
				"room_id": $('body').attr('id'),
				"message_text": $('textarea').val()
			});
			$('textarea').val('');
			return false;
		});

		$('textarea').keyup(function(e) {
			if (e.keyCode == 13 && !e.shiftKey) {
				$(this).trigger("submit");
			}
		});

		setInterval(function() {
			$('#container').scrollTop($('#container')[0].scrollHeight);
		}, 500);
	});
})();
