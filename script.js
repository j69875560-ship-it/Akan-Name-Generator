document.getElementById("akanForm").addEventListener("submit", function(event) {
  event.preventDefault(); // To spot the page from refreshing once details have been input.

  // 1. Gets the values from the form
  let day = parseInt(document.getElementById("day").value);
  // Remove the parseInt and allow a user to select options
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // 2. Set condition to ensure correct values are input and give an alert when incorrect values are input.
  if (day < 1 || day > 31 || month < 1 || month > 12 || gender === "") {
    alert("The values you have entered are incorrect. Please enter valid data!");
    return;
  }

  // 3. SPLIT YEAR
  let CC = parseInt(year.toString().slice(0, 2)); // first 2 digits
  let YY = parseInt(year.toString().slice(2));   // last 2 digits

  // 4. FORMULA
  let d = (( (CC / 4) - (2 * CC - 1) + ((5 * YY) / 4) + ((26 * (month + 1)) / 10) + day ) % 7);

  d = Math.floor(d); // remove decimals

  // 5. ARRAYS
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // 6. GET NAME
  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  // 7. DISPLAY RESULT
  document.getElementById("result").textContent =
    "You were born on " + days[d] + ".so your Akan name is " + akanName;
});