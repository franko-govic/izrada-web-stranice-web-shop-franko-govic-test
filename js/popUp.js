
let big = document.getElementById("container");
let exitBtn = document.getElementById("exit");

exitBtn.onclick = hidePopup;

function showPopup () {
  big.style.visibility = "visible";
}
function hidePopup () {
  big.style.visibility = "hidden";
}


setTimeout(showPopup, 2500);
setInterval(showPopup, 300000);
