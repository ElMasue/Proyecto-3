function listenForValidation() {
  const PERSONAL_FORM = document.getElementById("personal-form");
  PERSONAL_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {
  const NAME = e.target.name.value;
  const CAR = e.target.car.value;
  const EMAIL = e.target.email.value;

  let valid = true;

  if (!NAME) {
    document.getElementById("form-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-name").style.visibility = "hidden";
  if (!CAR) {
    document.getElementById("form-car").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-car").style.visibility = "hidden";
  if (!EMAIL) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email").style.visibility = "hidden";
  if (EMAIL && !validateEmail()) {
    document.getElementById("form-email-invalid").style.visibility = "visible";
    valid = false;
  } else
    document.getElementById("form-email-invalid").style.visibility = "hidden";

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, CAR, EMAIL);
  }
}
function saveData(name, car, email) {
  localStorage.setItem("name", name);
  localStorage.setItem("car", car);
  localStorage.setItem("email", email);
}
function validateEmail() {
  var emailField = document.getElementById("email");
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (validEmail.test(emailField.value)) {
    return true;
  } else {
    return false;
  }
}
listenForValidation();
