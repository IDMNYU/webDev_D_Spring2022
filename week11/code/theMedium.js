console.log("ES");
const theButton = $("#myButton").on("click", myFunction);
const otherButton = $("#yrButton").on("click", yrFunction);
//
let theP = "<p> 🌲yr a hero</p>"

function myFunction() {
  console.log("click");
  // add the paragraph programtically
  $('h3').append(theP);
  $('body').append("<h1>what the waht!?</h1>")
 
}
$("#target").click(function() {
  console.log("click yellow!");
  $("#other").text("Now the text is changed to this!");
  $("div").css("background-color", "red");
})


function yrFunction(){
 console.log("turn off");
 // removes any p element that has the word hero
 $('p').remove(":contains('hero')");
}