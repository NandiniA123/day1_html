function onFormSubmit() {
  const name = document.getElementById("NAME").value.trim();
  const age = document.getElementById("AGE").value.trim();
  const mobile = document.getElementById("MOBILE").value.trim();
  const email = document.getElementById("MailID").value.trim();
  const course = document.getElementById("COURSE").value.trim();

  if (isValid(name, age, mobile, email, course)) {
    alert("Your details are saved successfully!");
    clearForm();
  }
}

function isValid(name, age, mobile, email, course) {
  const namePattern = /^[a-zA-Z\s]+$/;
  if (!namePattern.test(name)) {
    alert("Please enter a valid Name (letters and spaces only).");
    document.getElementById("NAME").focus();
    return false;
  }
  const ageValue = parseInt(age);
  if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
    alert("Please enter a valid Age between 18 and 100.");
    document.getElementById("AGE").focus();
    return false;
  }
  const mobilePattern = /^[0-9]\d{9}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit Mobile number starting with 6, 7, 8, or 9.");
    document.getElementById("MOBILE").focus();
    return false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid Email ID.");
    document.getElementById("MailID").focus();
    return false;
  }
  const coursePattern = /^[a-zA-Z\s]+$/;
  if (!coursePattern.test(course)) {
    alert("Please enter a valid Course name (letters and spaces only).");
    document.getElementById("COURSE").focus();
    return false;
  }

  return true;
}

function clearForm() {
  document.getElementById("NAME").value = "";
  document.getElementById("AGE").value = "";
  document.getElementById("MOBILE").value = "";
  document.getElementById("MailID").value = "";
  document.getElementById("COURSE").value = "";
  document.getElementById("NAME").focus(); // Set focus to the first field
}

function exitForm() {
  if (confirm("Are you sure you want to exit?")) {
    alert("Exiting the form. (Note: window may not close due to browser restrictions)");
  }
}
