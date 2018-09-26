var canvas;

var count = 0;
var firstOption = false;

var nameInput;
//keys
var key1 = false;
var key2 = false;
function setup(){
bgColor = 200
// Button 
button = createButton('Breakout');
button.mousePressed(counter);
button.position(0,0);
// Paragraph
  //ControlFont cf2 = new ControlFont(createFont("Times",30);
paragraph = createP('You are locked out find the clues to Breakout seems like you need 3 keys');
paragraph.position(650,0);
// Textbox
textInput= createInput('Type your name here');
textInput.position(0,200);
// Slider
createElement("br");
ellipseSlider=createSlider(0,600,0);
}
function counter(){
	count++;
}
function draw(){
	if (count == 1){
		paragraph.html('Behind a button you find a clue: "Fool me once shame on you, fool me twice shame on me, fool me three times... There wont be a next time"')
	}
	if (ellipseSlider.value()>590 && ellipseSlider.value()<600 && firstOption == false && count > 2){
		hiddenP1 = createP('Riddle: What do you use every single day, but never pay for? What is truly yours but came from somewhere else? What is very personal but shared with everyone?');
		paragraph.html('You found the first riddle solve it to acquire your next clue')
		firstOption = true;
		key1 = true
	}
	if (textInput.value() == 'name'){
		print('works');
		paragraph.html('Congrats you answered the riddle! the next room is unlocked ');
		key2 = true;
	}
	
}
	// using a slider to reveal a word within an ellipse 
	// use a button combination to figure out the riddle
	// next scene

	// used an ellipse that we control with wasd to move farther (get smaller) or closer (get bigger)
	// optical illusion stage 
	// find a way to manuever the "ball" into the hole
	// (moving the ball left moves the smaller )
	
	// end