console.log("the javaScript is here!");

// function setup(){
//     console.log("p5 is here!")
//     createCanvas(windowWidth,windowHeight);
//     background(255);
// }

// function draw(){
//     ellipse(mouseX,mouseY, 10);
// }

//smiley face

function setup() {
    console.log("p5 is here!")
    createCanvas(500, 500);
    background(240, 240, 240);
  
    push(); //note the origin location
    
    //color functions
    noFill();
    strokeWeight(4);
    stroke(255, 200, 50);
    
    translate(100,100);// translate origin to 100,10
    
    //draw face
    ellipse(40, 110, 100, 100);
    arc(40, 125, 33, 30, 0, PI);
    fill(0);
    ellipse(20,100, 10, 10);
    ellipse(60, 100, 10, 10);
    
    
    translate(200,100);
    ellipse(40, 110, 100, 100);
    arc(40, 125, 33, 30, 0, PI);
    fill(0);
    ellipse(20,100, 10, 10);
    ellipse(60, 100, 10, 10);
    
    translate(50,100);
    ellipse(40, 110, 100, 100);
    arc(40, 125, 33, 30, 0, PI);
    fill(0);
    ellipse(20,100, 10, 10);
    ellipse(60, 100, 10, 10);
    
    translate(-200,-100);
    ellipse(40, 110, 100, 100);
    arc(40, 125, 33, 30, 0, PI);
    fill(0);
    ellipse(20,100, 10, 10);
    ellipse(60, 100, 10, 10);
      
    pop(); //put the origin back
    
    grid(); // this is a custom function to draw a grid (written below to demo)
    
    
  
  }

  
  function grid(){
    stroke(220,220,220);
    strokeWeight(1);
    for(let i=0; i<width; i=i+20){
      for(let j = 0; j<height; j=j+20){
         line(i,0,i,height);
        line(0,j,width,j);
      }
    }
  }