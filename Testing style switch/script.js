function selectTheme(){
  var selection = document.getElementById('style').value;
  console.log(selection);
  document.getElementById("mySelection").innerHTML = selection;
  //var darkTheme = document.getElementById("stylesheet") = "<link id=/stylesheet/ rel=/stylesheet/ href=/styleDark.css/ type=/text/css/>";
  // var lightTheme = document.getElementById("stylesheet") = "<link id=/stylesheet/ rel=/stylesheet/ href=/styleLight.css/ type=/text/css/>";
// console.log(darkTheme);
// console.log(lightTheme);

}
var currentCSS = document.getElementById("stylesheet");
var testcase = document.getElementById("BTN");
console.log(currentCSS);
console.log(testcase);
//let user set value dark or light or notsure via dropdown
//DOM to get selected value
//if value is Dark DOM and write link tag in the head to point to styleDark.css
//if value is Light DOM and write link tag in the head to point to styleLight.css
