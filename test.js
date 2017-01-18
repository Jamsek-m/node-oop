'use strict';

var db = require('./db');

class Test {

	constructor(tekst){
		this.sporocilo = tekst;
	}

	print(){
		console.log("Pozdrav " + this.sporocilo);
	}

	static pozdrav(){
		console.log("Hello world!");
	}

	vrni1(callback){
		db.query("SELECT * FROM oseba", function(err, rows){
			if(err) return callback(err);
			else return callback(null, rows);
		});
	}

	static vrni2(callback){
		db.query("SELECT * FROM oseba", function(err, rows){
			if(err) return callback(err);
			else return callback(null, rows);
		});
	}

}

module.exports = Test;