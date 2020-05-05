var chalk = require('chalk');

function dog(name) {
	this.name = name;
	this.stomach = [];
}
dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat); 
};

dog.prototype.sayHi = function() {
	// body...
	console.log('Hi! I am a dog. My name is ' + chalk.red(this.name));
};

module.exports = dog;