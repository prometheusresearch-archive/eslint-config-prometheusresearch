module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "__PUBLIC_PATH__": true,
    "__require__": true,
    "__REX_WIDGET_THEME__": true,
    "__REX_WIDGET_MOUNT_PREFIX__": true,
    "__MOUNT_POINTS__": true,
    "__REX_USER__": true
  },
  "parser": require.resolve("babel-eslint"),
  "extends": "eslint:recommended",
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-vars": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "jsx-quotes": [2, "prefer-double"],
    "comma-dangle": [1, "only-multiline"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "no-var": 2,
    "no-unused-vars": [
      2,
      {
        "args": "after-used",
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "quotes": [
      2,
      "single",
      "avoid-escape"
    ],
    "semi": [
      2,
      "always"
    ]
  }
};
