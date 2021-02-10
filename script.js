//Defining some stuff

/*
================== CR STUDIOS 2020 =====================
             DO NOT COPY THIS GAME OR ELSE.....
*/ 
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//X Max = 1250 
//X min = 0
//Y max = 775
//Y Min = 125
var x = 500;
var y = 500;
var x2 = 250;
var y2 = 250;
var player = document.getElementById("image");
var player2 = document.getElementById("image2");
var goal;

function poop1() {
    if (Number(localStorage.lvlOne)) {
      localStorage.lvlOne = Number(localStorage.lvlOne) + 0; 
    } 
    else {
      localStorage.lvlOne = 1;
      Number(localStorage.lvlOne);
    }
}
function poop2() {
    if (Number(localStorage.lvlTwo)) {
      localStorage.lvlTwo = Number(localStorage.lvlTwo) + 0; 
      localStorage.lvlTwo = Number(localStorage.lvlTwo);
    } 
    else {
      localStorage.lvlTwo = 1;
      Number(localStorage.lvlTwo);
    }
}
setInterval (
  function () {
    poop1();
    poop2();
  }, 1000
)
//Display stuff
//localStorage.lvlOne = Number(localStorage.lvlOne) + 0; 
function display() { 

player.style.position = "absolute";
player.style.top = y + "px";
player.style.left = x + "px";
//========================================== lvl
player2.style.position = "absolute";
player2.style.top = y2 + "px";
player2.style.left = x2 + "px";
document.getElementById("poop").innerHTML = "P1 X: " + x + " P1 Y: " + y +  " | P2 X: " + x2 + " P2 Y: " + y2 + " | Goal X: " + goal_x + " Goal Y: " + goal_y + " | P1: " + Number(localStorage.lvlOne) + " | P2: " + Number(localStorage.lvlTwo);
}
setInterval (
  function () {
    display();
  }, 1
)
//The controls
//X Max = 1250 - 50
//X min = 0 - 0
//Y max = 775 - 31
//Y Min = 125 - 5
function ifTouching1() {
  if (x == x2 && y == y2) {
    localStorage.lvlOne = Number(localStorage.lvlOne) + 1;
    alert("Player 1 has killed Player 2! F");
    x2 = randint(0, 50) * 25;
    y2 = randint(5, 31) * 25;
    display();
  }
}
function ifTouching2() {
  if (x2 == x && y2 == y) {
    localStorage.lvlTwo = Number(localStorage.lvlTwo) + 1;
    alert("Player 2 has killed Player 1! F");
    x = randint(0, 50) * 25;
    y = randint(5, 31) * 25;
    display();    
  }
}

function up() {
  y = y - 25;
  win()
  display()
  boundry()
  ifTouching1();
}
function down() {
  y = y + 25;
  win()
  display()
  boundry()
  ifTouching1();
}
function left() {
  x = x - 25;
  win()
  display()
  boundry()
  ifTouching1();
}
function right() {
  x = x + 25;
  win()
  display()
  boundry()
  ifTouching1();
} 

//Player 2 controls
function uptwo() {
  y2 = y2 - 25;
  win2()
  display()
  boundry()
  ifTouching2();
}
function downtwo() {
  y2 = y2 + 25;
  win2()
  display()
  boundry()
  ifTouching2();
}
function lefttwo() {
  x2 = x2 - 25;
  win2()
  display()
  boundry()
  ifTouching2();
}
function righttwo() {
  x2 = x2 + 25;
  win2()
  display()
  boundry()
  ifTouching2();
} 

//Set boundries

function boundry() {
  if (y <= 125) {
    alert("You may not go past the boundry!");
    y = y + 50;
  }
  if (y >= 775) {
    alert("You may not go past the boundry!");
    y = y - 50;
  }
  if (x <= 0) {
    alert("You may not go past the boundry!");
    x = x + 50;
  }
  if (x >= 1250) {
    alert("You may not go past the boundry!");
    x = x - 50;
  }

//========================================================

  if (y2 <= 125) {
    alert("You may not go past the boundry!");
    y2 = y2 + 50;
  }
  if (y2 >= 775) {
    alert("You may not go past the boundry!");
    y2 = y2 - 50;
  }
  if (x2 <= 0) {
    alert("You may not go past the boundry!");
    x2 = x2 + 50;
  }
  if (x2 >= 1250) {
    alert("You may not go past the boundry!");
    x2 = x2 - 50;
  }
}

//Randomize
var goal_x = (randint(0, 31) * 25);
var goal_y = (randint(5, 31) * 25);
goal = document.getElementById("sheep");
goal.style.position = "absolute";
goal.style.top = goal_y + "px";
goal.style.left = goal_x + "px";

//Do stuff when you reached the goal
function win() {
if (y == goal_y && x == goal_x) {
  alert("Yay! Player 1 has beat level " + localStorage.lvlOne + "!")
  goal_x = (randint(0, 10) * 25);
  goal_y = (randint(0, 10) * 25);
  goal.style.position = "absolute";
  goal.style.top = goal_y + "px";
  goal.style.left = goal_x + "px";
  localStorage.lvlOne = Number(localStorage.lvlOne) + 1;
 }
}
function win2() { //lvl
if (y2 == goal_y && x2 == goal_x) {
  alert("Yay! Player 2 has beat level " + localStorage.lvlTwo + "!")
  goal_x = (randint(0, 10) * 25);
  goal_y = (randint(0, 10) * 25);
  goal.style.position = "absolute";
  goal.style.top = goal_y + "px";
  goal.style.left = goal_x + "px";
 localStorage.lvlTwo = Number(localStorage.lvlTwo) + 1;
 }
}
// lvl
//Re-Genereate Shop Location if its not reachable

function regenerate() {
  goal_x = (randint(2, 30) * 25);
  goal_y = (randint(4, 30) * 25);
  goal.style.top = goal_y + "px";
  goal.style.left = goal_x + "px";
  display()
}    
// localStorage.lvlTwo
//Ctrl + Shift J for chromebook and windows, then enter this super secret cheat. Mac: weird symbol + option + J

function super_secret_hack_P1() {
  localStorage.lvlOne = 10000000000000;
}
function super_secret_hack_P2() {
  localStorage.lvlTwo = 10000000000000;
}

function whenPressed(theKey, thefunction) {
document.onkeydown += function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===theKey){
        thefunction();
    }
  };
}

function foo (e) {
  if (e.key == 'w' ) 
    up();
  else if (e.key == 's')
    down();
  else if (e.key == 'a')
    left();
  else if (e.key == 'd')
    right();

  if (e.key == 'ArrowUp' ) 
    uptwo();
  else if (e.key == 'ArrowDown')
    downtwo();
  else if (e.key == 'ArrowLeft')
    lefttwo();
  else if (e.key == 'ArrowRight')
    righttwo();
}

document.addEventListener('keydown', foo);


function move() {
  var direction = randint(1, 5);
  if (direction == 1) {
    goal_x = goal_x + 25;
  }
  if (direction == 2) {
    goal_x = goal_x - 25;
  }
  if (direction == 3) {
    goal_y = goal_y + 25;
  }
  if (direction == 4) {
    goal_y = goal_y - 25;
  }
  if (goal_x >= 1250) {
    goal_x = goal_x - 25;
  }
  if (goal_x <= 0) {
    goal_x = goal_x + 25;
  }
  if (goal_y >= 775) {
    goal_y = goal_y - 25;
  }
  if (goal_y <= 125) {
    goal_y = goal_y + 25;
  }
  document.getElementById("DIRECTION").innerHTML = "Direction: " + direction; 
  if (goal)
  goal.style.top = goal_y + "px";
  goal.style.left = goal_x + "px";
  win();
  win2();
}
//X Max = 1250 
//X min = 0
//Y max = 775
//Y Min = 125

setInterval (
  function () {
    move();
  }, 250
)
//Super secret comment.