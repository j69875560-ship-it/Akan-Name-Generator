document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    // 1. GET INPUT VALUES
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    let gender = document.getElementById("gender").value;

    // 2. VALIDATION
    if (day < 1 || day > 31 || month < 1 || month > 12 || gender === "") {
      alert("Please enter valid data!");
      return;
    }
  }