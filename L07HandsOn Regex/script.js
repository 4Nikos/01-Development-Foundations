    function testRegex(fullName) {
        let fName = document.getElementById('fName').value;
        let lName = document.getElementById('lName').value;
        fullName = fName + " " + lName; ;
        let nameRegex = /^([A-Z]\w+) ([A-Z]\w+)$/;
        if (fullName.match(nameRegex)) {
        alert('Yay! Your inputs were all correct!');
        } else {
        alert(' Oh no! Thats an invalid format!');
        console.log("You typed " +'"' + fullName+ '"' + " don't you usually capitalize first letters?");
        }
        }