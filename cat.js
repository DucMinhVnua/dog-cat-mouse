function cat(name) {
	this.name = name;
	this.stomach = [];
}
cat.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);
};
module.exports = cat;