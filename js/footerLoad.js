function headerLoad () {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("footer").innerHTML = this.responseText;
  }
  xhttp.open("GET", "partials/footer.html");
  xhttp.send();
}

headerLoad();