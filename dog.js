function dog() {
	this.stomach = [];
}
dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};