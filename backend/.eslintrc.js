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
      "curly": "error",
      "object-curly-spacing": ["error", "never"],
      "template-curly-spacing": ["error", "never"],
      "no-trailing-spaces": "error",
      "space-before-blocks": "error",
      "spaced-comment": ["error", "always"],
      "space-infix-ops": "error",
      "arrow-spacing": "error",
      "comma-dangle": ["error", "never"],
      "guard-for-in": "error",
      "camelcase": "error",
      "indent": ["error", 3, { "SwitchCase": 1 }],
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-useless-constructor": "error",
      "no-unneeded-ternary": "error",
      "no-duplicate-imports": "error"
   }
};