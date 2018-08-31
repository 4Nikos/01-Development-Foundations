let btn = document.getElementById('btn');
function nameInfo(e) {

  var firstName = document.getElementById('firstName').value;
  var middleName = document.getElementById("middleName").value;
  var lastName = document.getElementById("lastName").value;
  var fullName= firstName + ' ' + middleName + ' ' + lastName;
  document.getElementById("fullName").innerHTML = fullName;
  e.preventDefault();
}
btn.addEventListener("click", nameInfo);
