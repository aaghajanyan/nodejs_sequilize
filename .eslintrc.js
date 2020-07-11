module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'jquery': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 7,
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'promise'
    ],
    'settings': {
        'react': {
            'createClass': 'createReactClass', // Regex for Component Factory to use, default to 'createReactClass'
            'pragma': 'React',  // Pragma to use, default to 'React'
            'version': '0.14.8' // React version, default to the latest React stable release
        }
    },
    'rules': {
        "no-trailing-spaces": "error",
        "react/no-unused-prop-types" : "error",
        "object-curly-spacing": "error",
        'jsx-quotes': ["error", "prefer-double"],
        'space-before-function-paren': ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        'no-duplicate-imports': "error",
        'require-await': "error",
        'no-dupe-keys': "error",
        'keyword-spacing': ["error", { "overrides": {
            "if": { "after": false },
            "for": { "after": false },
            "while": { "after": false },
            "catch": { "after": false }
        }}],
        'indent': ['warn', 4, {
            'ArrayExpression': 1,
            'CallExpression': {'arguments': 'off'},
            'FunctionDeclaration': {'parameters':'first', body: 1},
            'FunctionExpression': {'parameters':'first', body: 1},
            'MemberExpression': 1,
            'ObjectExpression': 'first',
            'SwitchCase': 1,
            'VariableDeclarator': 1,
            'outerIIFEBody': 1
        }],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-var': 2,
        'no-throw-literal': 1,
        'no-case-declarations': 0,
        'comma-dangle': ['error', 'never'],
        'no-console': 1,
        'block-scoped-var': 2,
        'consistent-return': 1,
        'curly': ['warn', 'all'],
        'default-case': ['warn'],
        'dot-location': ['warn', 'property'],
        'dot-notation': ['warn', {'allowKeywords': true}],
        'eqeqeq': 2,
        'no-alert': 1,
        'no-empty-function': 1,
        'no-extend-native': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 1,
        'no-loop-func': 2,
        'no-magic-numbers': 1,
        'no-multi-spaces': 2,
        'no-param-reassign': 1,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-sequences': 2,
        'no-unmodified-loop-condition': 1,
        'no-unused-expressions': 1,
        'no-unsafe-finally': 1,
        'no-useless-call': 2,
        'no-self-compare': 2,

        /* Stylistic
        -------------------------------------------------------------*/
        'prefer-template': 1,
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'yield-star-spacing': 1,
        'template-curly-spacing': ['error', 'never'],
        'no-duplicate-imports': ['error'],

        /* Promises plugin
        -------------------------------------------------------------*/
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'off',

        /* React / JSX
        -------------------------------------------------------------*/
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-max-props-per-line': ['warn', {when: 'multiline', maximum: 1}],
        'react/default-props-match-prop-types': 'warn',
        'react/no-children-prop': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-typos': 'error',
        'react/no-string-refs': 'error',
        'react/prefer-es6-class': 'error'
    },
    'overrides': [
        // For code templates for the browser
        {
            'files': ['src/templates/code/*.js'],
            'excludedFiles': '*.test.js',
            'env': {
                'browser': true,
                'es6': false,
                'jquery': true
            },
            'rules': {
                'no-var': 0,
                'prefer-template': 0,
                'quotes': ['error', 'single']
            }
        }
    ]
};