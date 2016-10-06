//Katharine LoScalzo
//6 October 2016
//bonus

var rotAmount = 0;

function setup() {

    createCanvas(700, 700);

}

function draw() {

    push(); 
    fill(255, 0, 127);
    translate(300, 300);

    rotAmount = map(mouseX, 0, width, 0, 2 * PI);
    rotate(rotAmount);

    rect(0, 0, 40, 100);

    pop(); 
    
    
    //new
    push(); 
    fill(255, 0, 127);
    translate(100, 100);

    rotAmount = map(mouseX, 0, width, 0, 3 * PI);
    rotate(rotAmount);

    rect(0, 0, 40, 100);

    pop();
    
    
    //new
    push(); 
    fill(255, 0, 127);
    translate(500, 500);

    rotAmount = map(mouseX, 0, width, 0, 5 * PI);
    rotate(rotAmount);

    rect(0, 0, 40, 100);

    pop(); 
}
