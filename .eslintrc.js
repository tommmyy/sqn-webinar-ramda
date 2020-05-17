module.exports = {
	root: true,
	extends: ['react-union'],
	plugins: ['react-hooks'],
	rules: {
		'import/order': ['error', { 'newlines-between': 'always' }],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
		// for qraphql queries
		'react/prop-types': ['error', { ignore: ['data'] }],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'libs/**/*.test.js',
					'apps/**/*.test.js',
					'modules/**/*.test.js',
					'apps/**/.storybook-pdf/*',
					'apps/**/.storybook-ui/*',
					'apps/**/*.stories.js',
					'apps/**/gatsby-config.js',
					'testsSetup.js',
					'api/**/*',
					'tools/**/*',
					'*.config.js',
					'apps/**/*.config.js',
					'libs/**/*.config.js',
					'modules/**/*.config.js',
					'services/**/*.config.js',
				],
			},
		],
		// conflicts with Prettier
		'react/jsx-max-props-per-line': 0,
		'react/jsx-fragments': [2, 'element'],
		'react/jsx-curly-brace-presence': [2, 'never'],
	},
};
