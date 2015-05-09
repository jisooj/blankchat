"use strict";

(function() {
	var socket = io();
	console.log('hi');
	$(document).ready(function() {
		var divx = document.getElementById("container");

		socket.emit('change room', $('body').attr('id'));
		socket.on('message', function(msg) {
			$('#container').append($('<div>').text(msg));
			divx.scrollTop = divx.scrollHeight;
        	MathJax.Hub.Queue(["Typeset",MathJax.Hub,"container"], function() {
        		divx.scrollTop = divx.scrollHeight;
        	});
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
	});
})();
