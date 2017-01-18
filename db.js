var mysql = require('mysql');

var conn = mysql.createPool({
	host : 'localhost',
	user : 'uporabnik',
	password : 'uporabnik',
	database : 'testna',
	multipleStatements : true,
	connectionLimit : 100
});

conn.getConnection(function(err){
	if(err) throw err;
});

module.exports = conn;