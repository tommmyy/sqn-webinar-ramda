const R = require('ramda');
const R_ = require('ramda-extension');

const prepareGlobals = R.mapObjIndexed(
	R.always('readonly')
);
module.exports = {
	root: true,
	globals: prepareGlobals(R.mergeRight(R, R_)),
	extends: ['react-union'],
	rules: {
		'import/order': [
			'error',
			{ 'newlines-between': 'always' },
		],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: [
					'none',
					'all',
					'multiple',
					'single',
				],
			},
		],
		'react/jsx-pascal-case': [
			'error',
			{ allowAllCaps: true },
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'*.test.js',
					'testsSetup.js',
					'*.config.js',
				],
			},
		],
	},
};
