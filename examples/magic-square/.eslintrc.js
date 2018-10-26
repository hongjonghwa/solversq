// https://eslint.org/docs/user-guide/configuring

module.exports = {
  //root: true,
  settings: {
    react: {
      version: '16.6'
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    esmaVersion: 2018
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', 'jsx-a11y'],
  rules: {
	  'no-console': 'off'
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
