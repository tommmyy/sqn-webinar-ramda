// console.log(
// 	[1, 2, 3] //
// 		.map(x => 3 + x)
// 		.join('-')
// );

// const map = (xs, mapping) => xs.map(mapping);
// const join = (xs, glue) => xs.join(glue);

// console.log(
// 	compose(
// 		xs => join(xs, '-'),
// 		xs => map(xs, x => 3 + x)
// 	)([1, 2, 3]) //
// );

// const map = curry((xs, mapping) => xs.map(mapping));
// const join = curry((xs, glue) => xs.join(glue));

// console.log(
// 	compose(
// 		xs => join(xs)('-'),
// 		xs => map(xs)(x => 3 + x)
// 	)([1, 2, 3]) //
// );

console.log(
	compose(
		join('-'),
		map(x => 3 + x)
	)([1, 2, 3]) //
);
