var slider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + "€"; 


slider.oninput = function() {
  output.innerHTML = (this.value + "€");
}