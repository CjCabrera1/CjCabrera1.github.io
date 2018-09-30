
var len = 0;
var bgColor = 255;
var codearray = new Array();
var codearrayans = new Array(1,3,2,4);
var breakout = false;
var clue1 =false;
var clue2 =false;
function setup(){

paragraph = createP('hmm it seems that there is a password needed to breakout of here this should be the final room');
paragraph.position(650,0);

button0 = createButton('Breakout');
button0.position(0,0);
button0.mousePressed(check);

button01 = createButton('Breakout');
button01.position(0,21);
button01.mousePressed(check);

button = createButton('Color');
button.mousePressed(order);

button1 = createButton('1');
button1.mousePressed(code1);
button1.position(100,100);   

button2 = createButton('2');
button2.mousePressed(code2);
button2.position(200,100);

button3 = createButton('3');
button3.mousePressed(code3);
button3.position(100,200);   

button4 = createButton('4'); 
button4.mousePressed(code4);
button4.position(200,200);      

button4 = createButton('enter'); 
button4.mousePressed(cEnter);
button4.position(137,150);      


slider=createSlider(0,600,600);

}

function draw(){
canvas = createCanvas(600,600);
canvas.position(200,300);
if (slider.value()==0){
	paragraph = createP('You stumbled upon a number! "the last is 4 but what are the first 3?"');
	paragraph.position(250,500);
	clue1 = true;
}
background(bgColor);
if (background(bgColor) >= 200){
	thirteen = createP('13 seems to never be split up')
		thirteen.position(130,500);
}
}

function code1(){
	if (len<4){
		codearray.push(1);
		len++;
	}
	
}
function code2(){
	if(len<4){
	codearray.push(2);
	len++;
	}
}
function code3(){
	if (len<4){
	codearray.push(3);
	len++;
	}
}
function code4(){
	if (len<4){
	codearray.push(4);
	len++;
}
}
function cEnter(){
	if(codearray[0] == codearrayans[0] && codearray[1] == codearrayans[1] && codearray[2] == codearrayans[2] && codearray[3] == codearrayans[3]){
		print('works');
		breakout = true;
	}
	else {
		print(codearray);
		for(i=3;i>=0;i--){
			print(codearray);
			codearray.shift();
		}
	}
print(codearray);
}

function changeColor(){
	bgColor= color(ran);
	if (ran>= 0){
		thirteen = createP('13 seems to never be split up')
		thirteen.position(130,900);
		clue2 = true;
	}
}
var ran;
function rand(){
ran = random(0,255);
}
function order(){
	rand();
	changeColor();
}
function check(){
	if (breakout==true && clue1 ==true && clue2==true){
		button01.hide();
	}
	else if (breakout==true && clue1==false || clue2==false){
		button0.hide();
	}
}
