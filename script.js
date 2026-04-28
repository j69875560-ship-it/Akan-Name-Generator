document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();


    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    let gender = document.getElementById("gender").value;
  }
