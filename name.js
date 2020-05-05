function name(name) {
	this.name = name;
}
name.prototype.phone = function(phone) {
	// body...
	this.phone = phone;
};
module.exports = name;