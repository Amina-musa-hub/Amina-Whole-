
let ourForm = document.getElementById("ourForm")
let field = document.getElementById("field")
let lists = document.getElementById("lists")
ourForm.addEventListener("submit", (a) => {
    a.preventDefault()
   Createitem(field.value)
})
function Createitem(h) {
   let ourHTML = `<li> ${h}<button onclick="deleteItem(this)">Delete</button></li>`
   lists.insertAdjacentHTML("beforeend",ourHTML)
   field.value = ""
   field.focus()
}
function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}

// document.getElementById("calc-btn").addEventListener("click",function(){
//     let firstinput = document.getElementById("first-input").value
//     let secondinput = document.getElementById("second-input").value

//     let result = divid(Number(firstinput), Number(secondinput))
//     document.getElementById(result).innerHTML = result
// })

// function divide(num1, num2){
//     return num1/num2
// }

let car = {type:"Fiat", model:"500", color:"white"};
// car = "Fiat";      // Changes object to string
console.log(car)

let x = 10;
switch(x) {
  case 10: alert("Hello");
}

class Car {
  constructor(name, year) {
    this.name = "amina";
    this.year = 20;
  }
}

console.log(Car)


let myPromise = new Promise( function (resolve , reject){
    setTimeout(function() {
       resolve("Thank you ");}, 3000)
})

myPromise.then(function(value) {
  document.write(value)
});

