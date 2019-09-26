function setup() {
    createCanvas(900, 600);

}

//speed
var Cspeed = 2;
var Pspeed = 4;

//orange portal
var Ox = 500;
var Oy = 100;
var Ow = 50;
var Ol = 100;

//blue portal
var Bx = 300;
var By = 100;
var Bw = 50;
var Bl = 100;

//cube
var Cx = 100;
var Cy = 300;
var Cs = 45;

//score
var score = 0;

function draw() {
    background(228, 247, 247);
    Cx = Cx + Cspeed;

    //instructions
    fill(0);
        textSize(20);
        text('Do not let the companion cube touch the edge.', 10, 30);
        text('Blue portal: w, a, s, d', 10,560);
        text('Orange portal: arrow keys', 10, 580);
        text(score++, 850, 30);

    //orange
    strokeWeight(5);
    stroke(255, 100, 0)
    fill(255);
    ellipse(Ox, Oy, Ow, Ol);

    //blue
    strokeWeight(5);
    stroke(0, 55, 255)
    fill(255);
    ellipse(Bx, By, Bw, Bl);
    
    //cube
    noStroke();
    fill(205);
    square(Cx + Cspeed, Cy, Cs);

    //orange movement
        if(keyIsDown(DOWN_ARROW)) {
            Oy = Oy + Pspeed;
        }
        if(keyIsDown(UP_ARROW)) {
            Oy = Oy - Pspeed;
        }
        if(keyIsDown(LEFT_ARROW)) {
            Ox = Ox - Pspeed;
        }
        if(keyIsDown(RIGHT_ARROW)) {
            Ox = Ox + Pspeed;
        }
   
   //blue movement
        if(keyIsDown(83)) {
            By = By + Pspeed;
        }
        if(keyIsDown(87)) {
            By = By - Pspeed;
        }
        if(keyIsDown(65)) {
            Bx = Bx - Pspeed;
        }
        if(keyIsDown(68)) {
            Bx = Bx + Pspeed;
        }
   
    //when cube touches portals
    if(Cx >= Ox - 50 && Cx <= Ox + 50 && Cy <= Oy + 100 && Cy >= Oy - 100) {
        Cx = Bx + 55;
        Cy = By;
    }
    if(Cx >= Bx - 50 && Cx <= Bx + 50 && Cy <= By + 100 && Cy >= By - 100) {
        Cx = Ox + 55;
        Cy = Oy;
    }

    //level up
    if(score >= 800) {
        Cspeed = 4;
        fill(0);
        textSize(20);
        text('Speed up!', 440, 30);
    } 

    //lose
    if(Cx > 900) {
        score = 0;
        fill(0);
        textSize(25);
        text('You had one job.', 670, 580);
    }

}