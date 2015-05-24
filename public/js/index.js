"use strict";

(function() {
	var socket = io();
   // window.onload
	$(document).ready(function() {
		var divx = document.getElementById("container");

		socket.emit('change room', $('body').attr('id'));
		socket.on('message', function(msg) {
			$('#container').append($('<div id="message">').text(decodeURI(msg)));
			divx.scrollTop = divx.scrollHeight;
		});

		$('textarea').bind("submit", function() {
         storeEquation();
         document.getElementById("preview").innerHTML = "";
			socket.emit('message', {
				"room_id": $('body').attr('id'),
				"message_text": encodeURI($('textarea').val())
			});
			//console.log($('textarea').val().replace(/(?:\r\n|\r|\n)/g, '<br />'));
			$('textarea').val('');
			return false;
		});

		$('textarea').keydown(function(e) {
			if (e.keyCode == 13 && !e.shiftKey) {
				$(this).trigger("submit");
				$('textarea').val('');
				return false;
			} else {
        return moveIndex(e);
      }
		});

	});

	var equations = [];
   var i = equations.length - 1;

    function storeEquation() {
       equations.push(document.getElementById("m").value);
       if (equations.length > 20) {
          equations.shift();
       }
       i = equations.length;
    }

    function moveIndex(event) {
       // if (i < 0) {
       //    return; 
       // }
       if (event.keyCode == 38) { // up
          // i--;
          // if (i < 0) {
          //    i = equations.length - 1;
          // }
          if (i != 0) {
            i--;
          }
          document.getElementById("m").value = equations[i];
          //console.log(equations);
          return false;
       } else if (event.keyCode == 40) { // down
          //i = (i + 1) % equations.length;
          if (i < equations.length - 1) {
            i++;
            $('#m').val(equations[i]);
          } else {
            i = equations.length;
            $('#m').val('');
          }
          //document.getElementById("m").value = equations[i];
          //console.log(equations);
          return false;
       } else {
          return true;
       }
   }
})();
