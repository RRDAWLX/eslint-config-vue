module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    // https://eslint.vuejs.org/user-guide/#usage
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/README-zhcn.md
    'standard'
  ],

  /*
    add your custom rules here
    "off" or 0 - turn the rule off
    "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
  */
  rules: {
    'no-debugger': 'error',
    'no-console': 'error',
    'no-trailing-spaces': ['error', {
      skipBlankLines: true,
      ignoreComments: true
    }],
    'no-warning-comments': 'error',
    'comma-dangle': 'off',
    'prefer-const': 'off',
    'operator-linebreak': 'off',
  }
}
