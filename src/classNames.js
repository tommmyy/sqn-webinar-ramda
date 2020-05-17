// import './R';

const getClassName = identity;

console.log(getClassName('button')); // "button"
console.log(getClassName(['button', undefined, 'primary'])); // "button primary"
console.log(getClassName({ button: true, primary: false })); // "button"
console.log(
	getClassName(
		'button',
		['button', undefined, 'primary'],
		undefined,
		false,
		{ button: true, primary: false }
	)
);
