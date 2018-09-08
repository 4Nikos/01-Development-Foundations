// let yourGrade;

function switchCase(){
    switch (highSchoolGrade = parseInt(document.getElementById("inputGrade").value)) {
        case 9:
        yourGrade = "Freshman";
            break;
        case 10:
        yourGrade = "Sophomore";
            break;
        case 11:
        yourGrade = "Junior";
            break;
        case 12:
        yourGrade = "Senior";
            break;
        default:
        yourGrade = "Invalid";
    }
    console.log(yourGrade);
    return yourGrade;
}

//Function given for the conversion to a ternary
// function name2() {
//     let firstName = document.getElementById("inputName").value;
//     if (firstName === "John") {
//       document.getElementById("demo").innerHTML = "Hello John!";
//     }
//     else {
//       document.getElementById("demo").innerHTML = "Hello Human!";
//     }
//   }

function name2() {
    let firstName = document.getElementById("inputName").value;
  const yourName = firstName === "" ? "Human" : firstName;
  return yourName;
    }

    function combine(){
        document.getElementById("demo2").innerHTML = "Hello " + name2() + ", your grade is " + switchCase() ; 
    }

//I believe there is something missing from the instructions or 
//the code. There are references to "demo" ID and there is nothing 
//in the HTML to call out functions nor instructions to create something.
//I have reached out to mentor and spoke with Brendan Welner.
//He looked through my code, said it looks good and suggested 
//submititng it as is for the sake to be able to go forward.

//this is my vestion of the code with the "assumed" missing pieces.