//Array
let myNumbers = [4, 5, 6, 3]
let myWords = ["red", "orange","yellow" ]
let myPets = [{ name: "amina" },{age: 19}, {color: "porple", color2: "gray"} ]
myWords.push("gray","black")
let name = "amina"
let furuts = ["orange","apple"]
furuts.splice(1,1)

console.log(name.toUpperCase())
console.log(myNumbers.length)
console.log(myWords)
console.log(myPets[2].color)
console.log(furuts)

const frits = ["Banana", "Orange", "Apple", "Mango"];
console.log(frits.includes("Mango"))
  
let cat = {
    name: "meela",
    age: 4,
    color: "white"
}

const l = new Date(); 
document.write(l.toISOString())

const hour = new Date().getHours();
let greeting
if (hour < 20) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}
console.log(greeting)

let n = 5 ;
console.log(n == 8)

const a = new Date();
let tet = a.toString();
console.log(tet)

const h = new Date();
console.log(h)

const d = new Date();
console.log(d)

document.body.style.backgroundColor = "lightgreen"

// document.addEventListener("click" , ourFunction)
// function ourFunction() {
//     alert("Thank you for clicing amina.")
// }
 
let x = 150
y = 3
let f = x * y
alert(f)

const fruis = ["Apple", "Orange", "Apple", "Mango"];
let position = fruis.indexOf( "Apple") + 1;
console.log(position)

const person = {}
person.firstName = 'amina'
console.log(person)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.write(text)

// var y = ""
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// for (let i in myObj.cars) {
//   y += "<h2>" + myObj.cars[i].name + "</h2>";
//   for (let j in myObj.cars[i].models) {
//     y += myObj.cars[i].models[j] + "<br>";
//   }
// }

// document.write(y)

let tex = "";
let i = 1;
while (i < 11) {
  tex += i;
  i++;
}
console.log(tex)

let text1 = "A";
let text2 = "B";
let result = text1 < text2;

console.log(result)

function myFunction() {
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("demo").innerHTML = voteable + " to vote";
}
