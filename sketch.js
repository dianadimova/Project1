

function setup() {
    createCanvas(windowWidth, windowHeight);
    window.alert('Thank you for stopping by, but it seems it is going to rain now.              I will watch as you walk back from my window.                                 <<Click the screen to say goodbye.>>')
  }

  
 let xoff = 0.0;

  function draw() {
   
    noiseSeed(100);
    stroke(0, 100);

    stroke(160, 217, 255);
    strokeWeight(1);
    xoff = xoff + 1;
    let n = noise(xoff) * windowWidth;
    line(n, 1, n, height);
  
    stroke(0,0,0);
    strokeWeight(15);
    line(775, 0, 775, windowHeight);
    line(0, 450, windowWidth, 450);



   }



let word1 = ['g o o d']
let word2 = ['              b y e']

    function mousePressed() {
     stroke(160,217,255);
     textSize(20);
     fill(160,217,255);
     strokeWeight(1);
     text(word1, mouseX, mouseY);
    }
    function mouseReleased() {
      stroke(160,217,255);
      textSize(20);
      fill(160,217,255);
      strokeWeight(1);
      text(word2, mouseX, mouseY);
     }
  

  
  

