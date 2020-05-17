/* eslint-disable no-unused-vars */
const calculateDiscount0 = (price, discount) => {
	// helper variable
	let result = price * discount;

	if (result < 100) {
		// mutation
		result = 100;
	}

	return result;
};

const calculateDiscount = (discount, price) =>
	compose(
		x => (x < 100 ? 100 : x),
		x => x * discount
	)(price);

console.log(calculateDiscount(200, 0.8));
