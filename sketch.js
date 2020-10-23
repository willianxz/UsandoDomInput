var input;

function setup() {
 createCanvas(windowWidth, windowHeight);
 
 input = createInput();
 input.position(windowWidth/2 - 100,windowHeight/2 - 50);
 
 var button = createButton("Click Me");
 button.position(windowWidth/2 - 50, windowHeight/2 - 20);
 button.mousePressed(greet);
 
 var greeting = createP("What is your name?");
 greeting.position(windowWidth/2 - 70, windowHeight/2 - 100);

 textAlign(CENTER);
 textSize(80);
 stroke(random(255), random(200), random(255));
 fill(255);
}

function greet(){
  stroke(random(255), random(200), random(255));
  var name = input.value();
  for(var i = 0; i < 200; i++){
    push();
    translate(random(width), random(height));
    rotate(random(TWO_PI));
    text(name, 0, 0);
    pop();
  }
  input.value("");
}
