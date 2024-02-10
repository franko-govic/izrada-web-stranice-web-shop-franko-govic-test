var burgerBtn = document.getElementById("burger-btn");
var dropdownMenu = document.getElementById("dropdown-menu");

burgerBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
});
