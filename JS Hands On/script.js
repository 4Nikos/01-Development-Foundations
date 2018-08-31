function nameInfo (){
    var firstName = document.getElementById("fName").value;
    var middleName = document.getElementById("mName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + middleName + " " + lastName;
    document.getElementById("fullName").innerHTML = fullName;
}
