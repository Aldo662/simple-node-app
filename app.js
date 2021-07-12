//Modules
const { createMultiplyTable } = require('./helpers/createMpTb.js');
const colors = require('colors')
const argv = require('./config/yargs.js');

console.log('inicio app.js');
colors.enable();
console.log(argv);

let base = argv.base || argv.b;
let extension = argv.t || argv.typeFile;
let list = argv.l || argv.list;
let len = argv.h || argv.len;
console.log('Llamda a la funcion createMultiplyTable()')

createMultiplyTable(base, extension, list, len)
	.then(result => {
		console.log(colors.green('Multiply table created'));
		console.log(result);
	})
	.catch(error => console.log(colors.red(error)));


console.log('Fin de app.js');

