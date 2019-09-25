module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "standard",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "expect": true,
    "it": true,
    "describe": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "semi": [
      2, "always"
    ],
    "quotes": [
      2, "single",
      {
        "avoidEscape": true
      }
    ]
  }
};