const getClassName = cond([
	[is(String), of],
	[is(Array), identity],
	[is(Object), o(keys, filter(Boolean))],
	[T, always([])],
]);

const joinWithSpace = join(' ');

// const sanitize = replace(
// 	/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’\s]/g,
// 	''
// );

export const classNames = compose(
	joinWithSpace,
	uniq,
	filter(Boolean),
	// map(
	// 	o(
	// 		sanitize, // trim
	// 		unless(isString, always(''))
	// 	)
	// ),
	flatten, // unnest
	map(getClassName),
	unapply(identity)
);

console.log(
	JSON.stringify(
		classNames(
			'button',
			['button', undefined, 'primary'],
			undefined,
			false,
			// '  sl s  ',
			// '    ',
			// '',
			{ button: true, secondary: false }
		)
	)
);
