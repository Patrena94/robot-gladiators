function fight(){
    window.alert("The fight has begun!");
}
//fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack =10;

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  fight(enemyRobot);
}
for(var i=0; i <enemyNames.length; i++) {console.log(enemyNames[i]);
console.log(i); 
console.log(enemyNames[i] + "is at" + i + "index");
}
var fight=function() {
    window.alert("Welcome to Robot Gladiators!");
};
var promptFight = window.prompt ("would you like to FIGHT or SKIP to choose.");
if(promptFight==="fight"|| promptFight ==="FIGHT") { 
}
else if (promptFight==="skip" || promptFight ==="SKIP"){ var confirmSkip= window.confirm("Are you sure you'd like to quit?");
if (confirmSkip) {window.alert(playerName + "has decided to skip this fight. Goodbye!");
playerMoney=playerMoney - 2;
}
else {
  fight();
}

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
console.log( playerName + "attacked" + enemyNames +"." + enemyNames + "now has" + enemyHealth + "health remaining."
);
if(enemyHealth <=0) { window.alert(enemyNames + "has died!");
}
else {window.alert(enemyNames +"still has"+ enemyHealth +"health left.");
}
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log( enemyNames + " attacked " + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
  );
 if(playerHealth<=0) {window.alert(PalyerName +"has died");
}
else { window.alert(playerName +"still has" + playerHealth + "health left.");
} 
var playerHealth = 100;
if(playerHealth>0) {
  console.log("Your Player is still alive!")
}
var playerHealth = 10;
if(playerHealth===0) {console.log("this will not run.");
}
else{ console.log("This will run instead.");
}
}