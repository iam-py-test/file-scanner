"use strict";
var f_select = document.getElementById('f')
var result = document.getElementById('result')
f_select.onchange = function(e){
console.log(e)
  result.textContent = "Scanning..."
  window.setTimeout(function(){
    result.innerText = "Result: This is a file\nDetection: File.MachineLearning100\nConfidence: 100%"
  },20)
}
