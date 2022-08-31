//speed (frames per second) increases by 15 with each shot (maxes out at 120). Use the small time stop you get with each shot to jump to your next target

let launch, launchX, launchY
let cX, cY, cColor
let bColor //background color
let bubbles = [];
let grav = 0
let fps = 60 //starting fps (increases with each shot)
let speed = 9 //speed of objects ('difficulty')
let barrels = 10 //number of barrels

function setup() {
  launch = 0
  createCanvas(800, 600);
  frameRate(fps)
  cColor = 'white' //cursor fill
  sColor = 'red'  //cursor stroke
  bColor = 'white' //background color
  
  launchX = width/2
  launchY = height/2
  
  rColor = random (150, 255)
  
  rTraj = random (-0.5,0.5) //x traveling (not using)
  
    for (let i = 0; i < barrels; i++) {
    let x = random (25, width-25);
    let y = random (500,600);
    let r = random(30, 45);
    let b = new Bubble(x, y, r);
    
    bubbles.push(b);
  }
}



function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(cX, cY)) {
      bubbles.splice(i, 1);
      
      //HITSTOP
      textSize (100)
      noStroke()
      fill('red')
      text (bubbles.length + 1, cX, cY)
      frameRate(0)
      setTimeout(sixtyfps, 300) //wait (hitstop), then resume 60 fps
    }
  }
}


class Bubble {
  constructor(x, y, r, g) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.tint = 10;
    this.g = 0;
  }

  changeColor(tint) {
    this.tint = tint;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x
    this.y = this.y
    
    if (this.y < this.r) {this.g = 1} 
    if (this.g == 1) {this.y = this.y + speed*(this.y/(this.r*10))} //gravity changes with weight (radius)
    if (this.g == 0) {this.y = this.y - speed*(this.y/(this.r*10))} //gravity;  
  }
  
show(){
 stroke(0);
    strokeWeight(4);
    fill(this.tint, 0, 0, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function sixtyfps(){
  frameRate (fps)
  if (fps<120){ //max out at 120 fps
  fps = fps + 15}
  else {fps = fps}
}

function draw() {
  background(bColor);
  
  if (launch == 0){ //Before Start
  textSize (100)
   fill ('red')
  stroke ('white')
  text ('HIT', width/4, 100)
   fill ('white')
  stroke ('red')
  text ('STOP', width-width/1.8, 125)
    
  fill ('red')
  stroke ('black')
  strokeWeight (3)
  circle (launchX, launchY, 200) //Start button
  textSize (50)
  strokeWeight (0.5)
  stroke ('white')
  fill ('white')
  text ('Start', launchX - 50, launchY+10)  
    
  fill (cColor)
  strokeWeight (3)
  stroke (sColor)
  cX = mouseX
  cY = mouseY
  circle (cX, cY, 10) 
    
  
  if (launchX - 100 < cX && cX < launchX + 100 && launchY - 100 < cY && cY < launchY + 100){launch = 1} //hover over Start button
  }
  
  if (launch == 1){ //After launch
    fill (cColor)
  strokeWeight (3)
  stroke (sColor)
  cX = mouseX
  cY = mouseY
  circle (cX, cY, 10) 
    
  if (bubbles.length == 0){
      background (0,0,0)
      text ('PERFECT', width/4,height/2)
      frameRate(0) //"PERFECT" when all shot
  }
  
  if (bubbles.length > 0){ //When not all shot
  if (bubbles[0].y > 1200){ //When a bubble passes really low (has not been shot)
  if (bubbles.length == barrels) {
      fill ('black')
  strokeWeight (0)
  textSize (50)
  text ('...Try again', width/2,height/2)}//When all missed
    else{ fill ('red')
  stroke ('black')
         strokeWeight (3)
    text (barrels-bubbles.length + "/" + barrels, width/4, height/2)
    } //when some shot
  }
  
  
   
    for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(cX, cY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
    
  }
}
}
}
