var canvas;

var userName;

var bgColor;

var paragraph;

var textInput;

var button;

function setup(){
canvas = createCanvas(600,600);
canvas.position(100,200);
bgColor = 200;
userName = createElement('hi', 'Cj Cabrera');
//userName.position(100,10);
// Button 
button = createButton('Change Color');
button.mousePressed(changeColor);
button.position(100,200)
// Paragraph
paragraph = createP('this is a paragraph');
paragraph.mouseOver(changeColor);
// Textbox
textInput= createInput('Type your name here')
textInput.input(updateName);
// Slider
createElement("br");
ellipseSlider=createSlider(0,600,300);
}


function draw(){
	background(bgColor);
	ellipse(width/2,height/2,ellipseSlider.value(),ellipseSlider.value());
	
	if(ellipseSlider.value()>400){
		userName.hide();
	}
	else{ 
		userName.position(ellipseSlider.value(),0);
		userName.show();
	}
}


function updateName(){
	userName.html(textInput.value());
}


function changeColor(){
	bgColor= color(random(255));
}