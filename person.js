var db = require('./db');

function Oseba(name, starost){
	this.ime = name;
	this.age = starost;
}

Oseba.prototype.vrniVse = function(callback){
	db.query("SELECT * FROM oseba", function(err, rows){
		if(err) return callback(err);
		else return callback(null, rows);
	});
}

Oseba.prototype.zapisiVBazo = function(callback){
	db.query("INSERT INTO oseba(IME, AGE) VALUES(?, ?)", [this.ime, this.age], function(err, rows){
		if(err) return callback(err);
		else return callback(null);
	});
}

Oseba.prototype.vString = function(){
	return this.ime + ": " + this.age;
}

module.exports = Oseba;