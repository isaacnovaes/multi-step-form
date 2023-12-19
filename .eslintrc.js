module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                'eslint:recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:@typescript-eslint/strict',
                'prettier',
                'prettier/prettier',
                'plugin:prettier/recommended',
            ],
            rules: {
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        style: 'kebab-case',
                    },
                ],
                '@typescript-eslint/unbound-method': [
                    'error',
                    {
                        ignoreStatic: true, // for built-in validators
                    },
                ],
                '@typescript-eslint/no-redundant-type-constituents': 'warn',
                '@typescript-eslint/no-useless-empty-export': 'warn',
                'no-redeclare': 'off',
                '@typescript-eslint/no-redeclare': ['warn'], // overwrite base no-redeclare eslint
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': ['warn', { hoist: 'all' }], // overwrite base no-shadow eslint
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': ['warn'], // overwrite base no-unused-expressions eslint
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': 'warn', // overwrite base no-use-before-define eslint
                'default-case': 'warn',
                'no-lone-blocks': 'warn',
                'prefer-const': 'warn',
                yoda: 'error',
                '@typescript-eslint/consistent-type-definitions': 'off',
                '@typescript-eslint/consistent-type-exports': 'warn',
                '@typescript-eslint/method-signature-style': 'warn',
                'no-duplicate-imports': ['warn', { includeExports: true }],
                '@typescript-eslint/no-extraneous-class': 'off', // for modules
                '@typescript-eslint/no-floating-promises': 'off', // for rxjs subscriptions
                '@typescript-eslint/no-unsafe-assignment': 'warn',
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    { accessibility: 'no-public' },
                ],
                '@typescript-eslint/explicit-function-return-type': 'warn',
                '@typescript-eslint/consistent-indexed-object-style': 'warn',
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-confusing-void-expression': 'error',
                '@typescript-eslint/no-duplicate-enum-values': 'error',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/no-invalid-void-type': 'error',
                '@typescript-eslint/no-mixed-enums': 'error',
                '@typescript-eslint/prefer-enum-initializers': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'error',
                '@typescript-eslint/prefer-optional-chain': 'warn',
                '@typescript-eslint/prefer-readonly': 'warn',
                '@typescript-eslint/prefer-reduce-type-parameter': 'error',
                '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                '@typescript-eslint/promise-function-async': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
            },
        },
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
                'plugin:@angular-eslint/template/accessibility',
                'prettier',
                'prettier/prettier',
                'plugin:prettier/recommended',
            ],
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        parser: 'angular',
                    },
                ],
            },
        },
    ],
};
