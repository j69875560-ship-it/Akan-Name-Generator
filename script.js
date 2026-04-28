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

    // 3. SPLIT YEAR
    let CC = parseInt(year.toString().slice(0, 2)); // first 2 digits
    let YY = parseInt(year.toString().slice(2)); // last 2 digits

    // 4. FORMULA
    let d =
      (CC / 4 - (2 * CC - 1) + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) %
      7;

    d = Math.floor(d); // remove decimals

    // 5. ARRAYS
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
  }
