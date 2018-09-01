function idCard () {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var fullName = firstName + " " + lastName;
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
  var numberArray = [age, phoneNumber];
for (var i = 0; i < numberArray.length; i++) {
  if (numberArray[i] <=100){
    document.getElementById("postAge").innerHTML = "Age: " + age;
  }
  else if (numberArray[i] >100){
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
  }
}
// console.log(firstName);
// console.log(lastName);
// console.log(address);
// console.log(age);
// console.log(phoneNumber);
// console.log(numberArray);
document.getElementById("postFullName").innerHTML = fullName;
document.getElementById("postAddress").innerHTML = address;
}
