var Oseba = require('./person');
var Test = require('./test');

//primer z module exports
var p = new Oseba("Luka", 30);
/*p.zapisiVBazo(function(err, rows){
	if(err) console.log(err);
	else {
		console.log(p.vString() + " je zapisan v bazo!");
		p.vrniVse(function(err, rows){
			if(err) console.log(err);
			else console.log(rows);
			process.exit();
		});
	}
});*/


//primer z razredi
Test.pozdrav();
var t = new Test("How");
t.print();
Test.vrni2(function(err, rows){
	if(err) console.log(err);
	else console.log(rows);
	process.exit();
})

