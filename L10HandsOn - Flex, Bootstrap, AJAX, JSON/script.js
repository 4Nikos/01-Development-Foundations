let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("repo1").innerHTML = myObj[0].html_url;
  }
};
newRequest.open("GET", "https://api.github.com/users/4Nikos/repos", true);
newRequest.send();

let newRequest2 = new XMLHttpRequest();
newRequest2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("repo2").innerHTML = myObj[1].html_url;
  }
};
newRequest2.open("GET", "https://api.github.com/users/4Nikos/repos", true);
newRequest2.send();