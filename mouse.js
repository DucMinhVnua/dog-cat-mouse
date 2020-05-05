function mouse() {
	this.name = name;
	this.dead = false;
};
mouse.prototype.die = function() {
	// body...
	this.dead = true;
};
