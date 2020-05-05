var dog = require('./dog');
var cat = require('./cat');
var mouse = require('./mouse.js');

var shiba = new dog('shiba');
var mickey = new cat('mickey');

shiba.sayHi();
console.log('----guwwww!!!----')
shiba.eat(mickey);
console.log(shiba);