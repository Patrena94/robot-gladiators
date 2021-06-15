
var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack =10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

function fight(){
    window.alert("The fight has begun!");
}
var fight = function(enemyName){...//fight function statements}

for(var i=0; i<enemyNames.length; i++) {console.log(enemyNames[i]);
  console.log(i);
  console.log(enemynames[i] +"is at" + i +"index");
}

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

var fight = function (enemyName) {
while(playerHealth > 0 && enemyHealth > 0){
 
  var promptFight = window.prompt ("would you like to FIGHT or SKIP to choose.");
  if(promptFight==="fight"|| promptFight ==="FIGHT") { 
  }
  if (promptFight==="skip" || promptFight ==="SKIP"){ 
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
  if (confirmSkip) 
  {window.alert(playerName + "has decided to skip this fight. Goodbye!");//subtract money from playerMoney for skipping
  playerMoney = playerMoney - 10; 
  console.log("playerMoney", playerMoney);break 
  }
}
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
console.log( playerName + "attacked" + enemyName +"." + enemyName + "now has" + enemyHealth + "health remaining."
);
if(enemyHealth <=0) { window.alert(enemyName + "has died!");
}
//award player money for winning playerMoney=playerMoney + 20;

//leave while()loop since enemy is dead break; break;
} 
else {
  window.alert(enemyName + ' still has ' + playerHealth + ' health left.');
}

// remove players's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log( enemyNames + " attacked " + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
  );
 if(playerHealth<=0) {window.alert(PalyerName +"has died!");
}
else {
  window.alert(playerName + ' still has ' + playerHealth + ' health left.');
}
//check player's health
if(playerHealth > 0) {window.alert("Welcome to Robot Gladiators! Round " + (i+1));
var pickedEnemyName =enemyNames [i];
enemyHealth=50;
fight(pickedEnemyName);
}
else {window.alert("You have lost your robt in battle! Game Over!"); break;
}

if(playerHealth <=0) {window.alert(playerName + 'has died!');
// leave while () loop if player is dead break;
}
else {
  window.alert(playerName + ' still has ' + playerHealth + ' health left.');
}
var playerHealth = 100;
if(playerHealth > 0) {
  console.log("Your Player is still alive!")
}
var playerHealth = 10;
if(playerHealth===0) {console.log("this will not run.");
}
else{ console.log("This will run instead.");
}
//Games States
//"WIN"-Player robto has defeated all enemy-robots.
//*Fight all enemy-robots
//*Defeat each enemy-robot
//"LOSE"-Player robot's health is zero or less