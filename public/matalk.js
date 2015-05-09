"use strict";

(function() {
	window.onload = function() {
      var sendButton = document.getElementById("send");
      document.getElementById("m").onkeyup = 
         (function(event){
            if(event.keyCode == 13){
               sendButton.click();
            } else {
               makePreview();
            }
         });
	}
   
	function makePreview() {
      var previewContainer = document.getElementById("preview");
      var content = document.createElement("p");
      content.innerHTML = document.getElementById("m").value;
      previewContainer.innerHTML = "";
      previewContainer.appendChild(content);
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, "this will be new elmt"]);
	}
})();
