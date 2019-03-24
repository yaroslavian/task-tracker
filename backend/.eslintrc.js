module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-trailing-spaces": "error",
      "comma-dangle": ["error", "never"],
      "guard-for-in": "error",
      "camelcase": "error",
      "indent": ["error", 3, { "SwitchCase": 1 }],
      "no-useless-constructor": "error",
      "no-duplicate-imports": "error"
    }
};