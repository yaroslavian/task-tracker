module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
       "eslint:recommended",
       "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
       "quotes": ["error", "single"],
       "semi": ["error", "always"],
       "no-trailing-spaces": "error",
       "comma-dangle": ["error", "never"],
       "guard-for-in": "error",
       "camelcase": "error",
       "indent": ["error", 3, { "SwitchCase": 1 }],
       "jsx-quotes": ["error", "prefer-double"],
       "no-useless-constructor": "error",
       "no-duplicate-imports": "error"
    }
};