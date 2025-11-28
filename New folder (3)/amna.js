document.body.style.backgroundColor = "gray"
// document.addEventListener("click", () => alert("Thank you"))

let myNumbers = [ 5, 15 , 25]
let doubleNumbers = myNumbers.map(x => x * 2)
console.log(doubleNumbers)
console.log(myNumbers)

let John = {
  firstName: "Johbn",
  lastName: "Doe",
  driverCar() {
   let ourAmazingFunction = () => console.log(this)
     
    ourAmazingFunction()
  console.log(this.firstName + " " + this.lastName + " is driving a car .")
  }
}
John.driverCar()

saySomthingNice()

function saySomthingNice() {
    console.log("Hello")
}

let myname = "amina";console.log(`Hello my name is ${myname} and my age is 19 `)
