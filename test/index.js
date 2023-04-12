/* eslint-disable no-console */

const halloween = require('../src');

for (const func in halloween) {
	console.log(func, halloween[func]());
}

console.log('---');

const date = halloween.date();
console.log(`Halloween is on a ${new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(date)} in ${date.getFullYear()}`);