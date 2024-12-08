function showData() {
  const NAME = localStorage.getItem("name");
  document.getElementById("name").innerHTML = NAME;

  const CAR = localStorage.getItem("car");
  document.getElementById("car").innerHTML = CAR;

  const EMAIL = localStorage.getItem("email");
  document.getElementById("email").innerHTML = EMAIL;
}

showData();
