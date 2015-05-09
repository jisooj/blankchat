"use strict";

(function() {
	window.onload = function() {
      var sendButton = document.getElementById("send");
		//sendButton.onclick = sendMessage;
      document.getElementById("m").onkeyup = 
         (function(event){
            if(event.keyCode == 13){
               sendButton.click();
            }
         });
	}
   
   /** unused now 
	function sendMessage() {
      var msg = document.getElementById("m");
      var msgBubble = document.createElement("div");
      var content = document.createElement("p");
      content.innerHTML = msg.value;
      msgBubble.appendChild(content);

      document.getElementById("container").appendChild(msgBubble);
      msg.value = "";
	}
   */

})();
