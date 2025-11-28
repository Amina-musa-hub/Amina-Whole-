
document.body.style.backgroundColor = "lightgreen"

document.addEventListener("click", ourAmazingFunction)
function ourAmazingFunction() {
    alert('thank for clicking ')
}

// function doubleMe(x) {
//   return x * 2
// }

function createMulitlier(Mulitlier) {
    return function(x) {
    return x * Mulitlier
  }
}
let doubleMe = createMulitlier(2)
let tripleMe = createMulitlier(3)
let quadrupleMe = createMulitlier(4)
console.log(tripleMe(60))

let myColors = [" red ", " yellow ", " orange ", "green"]
myColors.forEach(saySomthingNice)
function saySomthingNice(color) {
 document.write(`The color " ${color} " is a greet color.<br> `)
} 


 
let pets = [
  {name:"Hassan", species:"man", age:25},
  {name:"Jamal", species:"man", age:44},
  {name:"hala", species:"woman", age:19}
];

console.log(pets.push({name:"salem", species:"man", age:10}))

let ourTest = pets.map(nameOnly)

function nameOnly(x) {
  return x.name
;}
console.log(ourTest)

let men = pets.filter(onlyMen)
function onlyMen(x) {
  return x.species == "man"
};
console.log(men)

  let arr = [
   {
    name:"islam",
    age:34
   },
   {
    name:"Ali",
    age:56
   },
   {
    name:"marah",
    age:24
   }
];

console.log(arr[2].name)
  let result = arr.filter(elem => elem.age < 56)
  console.log(result)

    //Global Scope
  var name = "Amina";
  console.log(`${name} from Global scope`);

  if (true) {
    // Block scope
  let ages = 20 
  console.log(`${name} from Block scope`);
  console.log(`${ages} from Block scope`);

  if(true) {
     //Nested scope
    let age = 25;
    console.log(`${age} from Nested scope`);
    console.log(`${ages} from Nested scope`);
    console.log(`${name} from Nested scope`);
  }
}

let John = {
  firstName: "Amina",
  lastName: "Musa",
  driverCar() {
  console.log(this.firstName + " " + this.lastName + " is driving a car .")
  }
}
John.driverCar()

function breath() {
  console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled .")
}

breath.call(John)


let letters = new Set();

const a = "a";
const b = "b";
const c = "c";

letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters)

const letter = new Set(["a","b","c","n"]);
console.log(letter.size)
console.log(letter.has("a"))

// List all Elements
let text = "";
for (const x of letter) {
  text += x + "<br>";
}
document.write(text)

let f = "22"
console.log()

const see = {
  name:"walad",
  age:10,
  color:" red"
}

const keys = Object.keys(see)
console.log(keys)

class Student {
     constructor(name , age ,food) {
      this.name = name 
      this.age = age
      this.food = food
     }

     printInfo() {
      
      console.log(`Name:${this.name} Age:${this.age}`)
     }
}

let std = new Student('Amina', 19 , 'pasta')

console.log(std)