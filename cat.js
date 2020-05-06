var mouse = require('./mouse.js')

function cat(name) {
	this.name = name;
	this.stomach = [];
}
cat.prototype.eat = function(animal) {
	// body...
	if(animal instanceof mouse){
		this.stomach.push(animal);
	}else{
		throw new Error ('cat chi an dc mouse!') 
	}
};
module.exports = cat;