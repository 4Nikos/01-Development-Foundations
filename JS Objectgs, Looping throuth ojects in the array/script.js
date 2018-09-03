// var instructor1 = {
//   name:"Cassandra",
//   course:"JavaScript",
//   availabilityYes:true,
//   age:35,
// };
// var instructor2 = {
//   name:"Jannet",
//   course:"JavaScript",
//   availabilityYes:false,
//   age:50,
// };
// var instructor3 = {
//   name:"David",
//   course:"Security",
//   availabilityYes:false,
//   age:31,
// };
// var instructor4 = {
//   name:"Cassandra",
//   course:"DataScience",
//   availabilityYes:true,
//   age:23,
// };
// var instructor5 = {
//   name:"Tom",
//   course:"Security",
//   availabilityYes:true,
//   age:48,
// };
var student1 = {
  name:"Nikos",
  course:"JavaScript",
  instructor:"unassigned",
};
var student2 = {
  name:"Sam",
  course:"JavaScript",
  instructor:"unassigned",
};
var student3 = {
  name:"Tina",
  course:"Security",
  instructor:"unassigned",
};
var student4 = {
  name:"Daniel",
  course:"DataScience",
  instructor:"unassigned",
};
var student5 = {
  name:"Kim",
  course:"JavaScript",
  instructor:"unassigned",
};
var student6 = {
  name:"Raj",
  course:"DataScience",
  instructor:"unassigned",
};
var student7 = {
  name:"Uly",
  course:"Security",
  instructor:"unassigned",
};
var student8 = {
  name:"Clint",
  course:"DataScience",
  instructor:"assigned",
};
var student9 = {
  name:"Ryan",
  course:"JavaScript",
  instructor:"assigned",
};
var student10 = {
  name:"Tiffany",
  course:"Security",
  instructor:"assigned",
};
var student11 = {
  name:"Billy",
  course:"Flash",
  instructor:"unassigned",
};
var students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10, student11];
for (var i=0; i<students.length; i++){
  if (students[i].course==="JavaScript"){
    students[i].instructor="JavaScript Teacher";
  }
  else if (students[i].course==="Security") {
    students[i].instructor="Security Teacher"
  }
  else if (students[i].course==="DataScience") {
    students[i].instructor="DataSience Teacher"
  }
  else students[i].instructor="There are no available inststuctors"
}
console.log(students);

function showmeStudents (){
  document.getElementById("output").innerHTML=students;
}
