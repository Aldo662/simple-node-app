const fs = require('fs');
const colors = require('colors');

console.log('inciio createMpTb.js');

const createMultiplyTable =  (num, extension, comand_l, comand_h) => {
	return new Promise((resolve, reject) => {

		let title = `Tabla del ${num}`;	
		let content = `${title} \n\n`;

		for (let i = 0; i <= comand_h; i++) {
			content += `${i} * ${num} = ${num * i} \n`;
		}

		//If exist -l or --list param that was passed as argument, then it wiil 
		//be printed on the console the table 

		if(comand_l) {
			console.log(colors.rainbow("===============\n\n"))
			console.log(content);
			console.log(colors.rainbow("==============="))
		}

		fs.writeFile(`./doc/Tabla-${num}.${extension}`, content, 'utf8', err => {
			if (err) {
				reject({file: title, type: extension, complete: true, err});
			} else {
				resolve({file: title, type: extension, complete: true});
			}
		});
		console.log('Creating...')
	})
};

module.exports = {
	createMultiplyTable
}

console.log('Final de createMPTb.js');
