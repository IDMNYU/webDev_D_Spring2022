console.log("the Message!");

let myName = "rebecca"
let myLast = "leopold"

console.log(myName + " "+ myLast + 45)

let theButton = document.querySelector("button");
let theBody = document.querySelector("body")
let theTxt = document.querySelector("h3")

theButton.addEventListener('click', buttonOne)

function buttonOne(){
    console.log("you cliked!");
   console.log(theBody.style)
   theBody.style.backgroundColor = "pink"
    theTxt.textContent = "horray you pressed the button!"
}