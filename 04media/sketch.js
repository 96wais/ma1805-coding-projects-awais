let img;

function preload(){
    img = loadImage("Antenna.jpg");
    //hum = loadSound("humm.wav");
    //video = createVideo(the)

}

function setup() {
    createCanvas(windowWidth , windowHeight);
}

function draw() {
    background(220);
    image(img, 0, 0, windowWidth, windowHeight);
    circle(50, 50, 50)
}
