//numbers
let number1 = 10;
let number2 = 10.555;
let result = number1 + number2;
console.log("Adding two number "+ result);

//strings
let string1 = "Hello ";
let string2 = "Bob";
result = string1 + string2;
console.log("adding two string: " + result);

//booleans
let boolValTrue = true;
let boolValFalse = false;
console.log("True bool = " + boolValTrue + ", False bool = " + boolValFalse);

//arrays
let arrayNumbers = [1, 2, 3, 4, 5];
let arrayStrings = ["Hello", "there", "Bob"];
let arrayMixed = [1, "Hello", "there", 3, ["Mr.", "Bob"]];
console.log("Numeric array: "+ arrayNumbers);
console.log("String array: "+ arrayStrings);
console.log("Mixed array: "+ arrayMixed);

//objects
let student = {
    name: "Billy",
    graduated: false,
    graduationDate: null,
};
console.log("Student object: "+ student);
console.log("Student object stringified" + JSON.stringify(student));