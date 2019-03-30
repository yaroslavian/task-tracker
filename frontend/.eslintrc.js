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
      "no-duplicate-imports": "error",
      
      // React special
      "jsx-quotes": ["error", "prefer-double"]
   }
};