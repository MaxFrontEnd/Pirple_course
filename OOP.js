/*
I think its better to use OOP when you can operate with data like a real objects. 
Functional programming its-better to use when you have some common data, which is available to some fucntions. 
Functions can operate with this data and change this data
If you want to incapsulate functionality depend - from what object that data was created - USE OOP
In OOP you cat create a class - from that class you can create objects 
You can inherit from created class, to create new class whis new methods. 
*/

// GAME - ENEMIES

// USER CASE 1

/*
User starts a game where he can encounter enemies. 
User meets humanoid enemy
Enemy have basic attributes - HP - DAMAGE - 
Enemy have basic method - FLEE - true or false
User may find out next humanoid behavior 
- Change weapons
- Pick up items
- Speak - true or false

User attack humanoid enimie - hummanoid enemy change his weapon on sheald
User defends himself with sheald - hummanoid enemy pick up a item from the ground
User sepak to humanoid enemy - hummanoid responds to user
*/

// USER CASE 2

/*
User starts a game where he can encounter enemies. 
User meets beast enemy
Enemy have basic attributes - HP - DAMAGE - 
Enemy have basic method - FLEE
User may find out next beast behavior 
- Roar
- night vision
- fear of fire - true or false

User attack beast enimie - beast enemy roar on user - user may panic
User is hiding at night - beast enemy find him - eneme have night vision
User sepak to beast- beast dosent respond
*/

// USER CASE 3

/*
User starts a game where he can encounter enemies. 
User meets undead enemy
Enemy have basic attributes - HP - DAMAGE - 
Enemy have basic method - FLEE
User may find out next undead behavior 
- Resurect
- death touch


User kill undead enimie - undead enemy resurect(if head not choped)
User stands in front of undead enemie - undea enemy touch user - user may turn to undead
*/

//ENEMY CLASS
// ATTRIBUTES :  HP, DAMAGE, CANFLEE - TRUE

//HUMANOID CLASS <---- ENEMY CLASS
// ATRIBUTES HAS SHEALD - TRUE or FALSE
// METHODS CHANGE WEAPON, PICK UP ITEM, SPEAK

//BEAST CLASS <-----ENEMY CLASS
// ATRIBUTES NIGHT VISION, FEAR OF FIRE
// METHODS ROAR,

//UNDEAD CLASS <-----ENEMY CLASS
// METHODS RESURECT, DEATH TOUCH

function Enemie(HP = 100, damage = 10, canFlee = true) {
  this.HP = HP;
  this.damage = damage;
  this.canFlee = canFlee;
}

function Humanoid(HP, damage, canFlee, hasSheald = false) {
  Enemie.call(this, HP, damage, canFlee);
  this.hasSheald = true;
  this.changeWeapon = function() {
    if (HP < 20 && this.hasSheald) {
      this.HP += 10;
      console.log(this.HP);
    }
  };

  this.pickUp = function() {
    console.log("picked up an item");
  };

  this.speak = function() {
    console.log("Whad do you want? bastard");
  };
}

let human = new Humanoid(10, 8, true);
console.log(human);
human.changeWeapon();
