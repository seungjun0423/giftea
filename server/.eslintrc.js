module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:recommended','airbnb'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['unused-imports'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    },
    'import/extensions': ['.js', '.ts']
  },
  ignorePatterns: ['build/', 'node_modules/', '.pnp.cjs', '.yarn/'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never'
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'comma-dangle': ['error', 'never']
  }
};