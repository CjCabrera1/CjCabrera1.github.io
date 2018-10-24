// hero stats
var hero;
var herox = 80;
var heroy = 80;
var heroHP = 0;
var tHP = 0;
var herostr = 0;
var hSpeed =0;
var hgold = 0;
var hsbonus;
var boots = false;
var eHP = 30;

var clickc = 0;

let enemy = [];
let enemydmg = 0;

var rpgLoc
var locate = '';

var weather;
var op;
	function preload(){ //end preload
	weather	= loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=9cc41f545ed6bc2c9eee27fb21e60b94", gotWeatherData)
	rpgLoc = loadJSON("js/rpg.json");
	}// end preload

	function setup(){ // start setup
	//randLoc();
	paragraph = createP('This is your journey! choose a class');
	stat = createP('Location:' + locate + ' Temp: ' + weather.main.temp);
	stat.position(900,0)
	enemyStat = createP('This is your buff/debuff guide: Temperature below 60 slows you down becareful! Void increases Enemy Damage! Road sets enemy damage to normal. The haven increases your damage by 1 and also a sleight buff to enemy damage')
	createCanvas(windowWidth,windowHeight-45)
	for (let i = 0; i < 10; i++) { // start loop
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Enemies(x, y, r);
    enemy.push(b);
    } // end loop

	
	hpBar = createP(heroHP + '/' +tHP + ' HP')
	hpBar.position(800,0)

	knight = createButton('Knight');
	knight.mousePressed(classKnight);
	knight.position(100,200)

	assassin = createButton('Assassin');
	assassin.mousePressed(classAssassin);
	assassin.position(100,300)

	} // end setup

	function gotWeatherData(data){
	weather = data;
	}
	function gotRPG(data){
	op = data;
	}

	function mousePressed() {
  for (let i = 0; i < enemy.length; i++) {
    enemy[i].clicked(mouseX, mouseY);
    if (eHP == 0){
    	enemy[i].hide()
    }    
   }
 }
	function areaLoc(){
	if (weather.main.temp < 40){
		enemydmg = 5
		locate = rpgLoc.settings[0].name
	}
	if (weather.main.temp > 50){
		herostr++
		enemydmg = 4
		locate = rpgLoc.settings[1].name
	}
	if (weather.main.temp < 50 && weather.main.temp > 40){ // neutral
		enemydmg = 3
	 locate = rpgLoc.settings[11].name
	}
	}

	function draw(){ // start draw
		areaLoc();
		stat .html('Location:' + locate + ' Temp: ' + weather.main.temp);
		hpBar.html(heroHP + '/' +tHP + ' HP')
		textSize(30);
		stroke(0);
		background(255);

		ellipse(herox,heroy,50,50);

		for (let i = 0; i < enemy.length; i++) {
  		 enemy[i].move();
   		 enemy[i].show();
 		 }
		if (keyIsDown(87) && keyIsDown(16) && boots == true ){//W
			heroy -= hSpeed+hsbonus;
		}
		else if (keyIsDown(87)){ 
			heroy -= hSpeed;
		}
		

		if (keyIsDown(83) && keyIsDown(16) && boots == true){
			heroy += hSpeed+hsbonus;
		}
		else if (keyIsDown(83)){ //S
			heroy += hSpeed;
		}
	

		if (keyIsDown(68) && keyIsDown(16) && boots == true){ //D
			herox += hSpeed+hsbonus;
		}
		else if (keyIsDown(68)){ 
			herox += hSpeed;
		}
		

		 if (keyIsDown(65) && keyIsDown(16) && boots == true){//A
			herox -= hSpeed+hsbonus;
		}
		 else if (keyIsDown(65)){ 
			herox -= hSpeed;
		}
			rect(200,50,80,50);
		if (keyIsDown(70) && herox >= 200 && herox <= 250 && heroy >= 50 && heroy <= 100  ){
			boots = true
			paragraph.html('You opened a chest! You found boots! press shift while holding down a direction to sprint')
		}
	} // end draw


	function checkWeatherStats(){
		console.log(hSpeed);
		console.log(weather.main.temp)
		if (weather.main.temp < 60){
			hSpeed--;
		}
		else {
			herostr++;
		}
		console.log(hSpeed)
	}
	function classAssassin(){ // start assassin
		hSpeed = 2
		herostr = 3
		hsbonus = 4
		heroHP = 40
		tHP = 40;
		fill(0);
		knight.hide();
		assassin.hide();
		checkWeatherStats();
	} // end assassin

	function classKnight(){ // start knight
		hSpeed = 2
		herostr = 5
		hsbonus = 2
		heroHP = 50
		tHP = 50;
		fill(150)
		knight.hide();
		assassin.hide();
		checkWeatherStats();
	} // end knight

	class Enemies{

	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
		}

	clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      eHP - herostr;
    	}
  	}

  	move() {
  		this.x = this.x + random(-10, 10);
    	this.y = this.y + random(-10, 10);
  	}

  	show() {
    	stroke(0);
    	ellipse(this.x, this.y, this.r * 2);
  	}
  }
