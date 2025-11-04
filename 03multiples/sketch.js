let theText = ["hello", "random", "words", "to", "display", "on", "the", "screen"];
let word = theText[0];
let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(60, 60, 120);

  // The text display
  textSize(60);
  text(word, random(350), height/2)

  // Change the value of word 
  word = theText[i];
  i=i+1;
  if(i>=theText.length){
    i=0;
  }
  console.log(i);

}




