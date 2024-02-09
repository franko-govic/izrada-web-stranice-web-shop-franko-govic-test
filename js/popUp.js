
let big = document.getElementById("container");
let exitBtn = document.getElementById("exit");

exitBtn.onclick = hidePopup;

function showPopup () {
  big.style.display = "block";
}
function hidePopup () {
  big.style.display = "none";
}


setTimeout(showPopup, 2500);
setInterval(showPopup, 300000);
