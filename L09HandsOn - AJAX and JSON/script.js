let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("autoLoad").innerHTML = myObj.name + " was born on " + myObj.birthday;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function loadBio () {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState ==4 && this.status == 200) {
            let myBio = JSON.parse(this.responseText);
            document.getElementById("loadBioHere").innerHTML = myBio.bio;
        }
    }
    xhttp.open("GET", "einstein.json", true);
    xhttp.send();
}