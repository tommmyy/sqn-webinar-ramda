const f = x => x + 3;
const g = x => x / 2;
const x = 1;

console.log(
	g(f(x)) //
);

// o
// compose
// pipe

// const calculateDiscount = (price, discount) => {
// 	// helper variable
// 	let result = price * discount;

// 	if (result < 100) {
// 		// mutation
// 		result = 100;
// 	}

// 	return result;
// };

// console.log(calculateDiscount(200, 0.8));
