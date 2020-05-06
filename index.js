var dog = require('./dog');
var cat = require('./cat');
var mouse = require('./mouse');

var shiba = new dog('shiba');
var tom = new cat('tom');
var Mouse = new mouse('jerry');

try{
	tom.eat(Mouse);
	console.log(tom);
 }catch{
 	console.log('tom chi an duoc mouse');
 }
