const REGEXP = /\b[0-9][0-9]:[0-9][0-9]\b/;

function regExpTime(str) {
	return REGEXP.test(str);
}
console.log(regExpTime('Breakfast at 109:00 in the room 123:456'))