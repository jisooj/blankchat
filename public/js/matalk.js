"use strict";

(function() {
   var equations = [];
   var i = equations.length - 1;

	window.onload = function() {
      document.getElementById("m").onkeyup = 
         (function(event){
            if(event.keyCode == 13){
               storeEquation();
               document.getElementById("preview").innerHTML = "";
            } else {
               moveIndex(event);
            }
            console.log("pressed");
         });
	}
   
   function storeEquation() {
      equations.push(document.getElementById("m").value);
      if (equations.length > 20) {
         equations.shift();
      }
      i = equations.length;
   }

   function moveIndex(event) {
      if (i < 0) {
         return; 
      }
      if (event.keyCode == 38) { // up
         i--;
         if (i < 0) {
            i = equations.length - 1;
         }
         document.getElementById("m").value = equations[i];
      } else if (event.keyCode == 40) { // down
         i = (i + 1) % equations.length;
         document.getElementById("m").value = equations[i];
      }
   }
})();
