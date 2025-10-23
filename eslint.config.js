import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import vitest from '@vitest/eslint-plugin'
import js from "@eslint/js";
import globals from "globals";

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.vitest,
			},
		},
		settings: {
			react: {
				version: "detect"
			},
		},
		plugins: {
			js,
		},
		rules: {
			...js.configs.recommended.rules,
		},
	},
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	reactHooksPlugin.configs.flat.recommended,
	{
		files: ['**/*.test.js', '**/*.test.jsx', '**/*.spec.js', '**/*.spec.jsx'],
		plugins: {
			vitest,
		},
		rules: {
			...vitest.configs.recommended.rules,
		},
	},
	{
		ignores: ['dist/**', 'node_modules/**'],
	}
]
