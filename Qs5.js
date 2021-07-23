// create object

const person = {
  firstName : "Nimal",
  lastName : "Raj",
  age : 15,
  city : "Kandy"
};

 var con = ("My name is " + person.firstName + " " +  person.lastName +". " + " I’m " + person.age + " " + "years old." + " I live in " + person.city +".");

 document.getElementById("q5").innerHTML = (con);
