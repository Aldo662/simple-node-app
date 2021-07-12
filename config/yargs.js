const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const colors = require('colors');
const { option } = require('yargs');

console.log('Inicio  de yargs.js ');

const argv = yargs(hideBin(process.argv))
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Multiply table num"
	})
	.option('l', {
		alias: 'list',
		type:'boolean',
		demandOption: false,
		default: false,	
		describe: 'An option to list the multiply table based on the provied arguments'
	})
	.option('t', {
		alias: 'typeFile',
		type: 'boolean',
		demandOption: false,
		default: 'txt',
		describe: 'Type of your file like extension, .txt, .pdf, etc'
	})
	.option("h", {
		alias: "len", 
		type: "number",
		default: 10,
		describe: "The last number of the multiply table"
	})
	.check((argv, options) => {
		if(isNaN(argv.b)) {
			throw new Error(colors.red('-b argument must be a number'))
		} else if(isNaN(argv.h)) {
			throw new Error(colors.red('-h argument must be a number'))
		} 
		//Whether the argument passed the check
		return true
	})
	.argv

module.exports = argv;
console.log("Fin de yargs")