module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'unused-imports'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './src'] // 2023-05-28 "Resolve error: unable to load resolver "node" import/extensions" 에러와 "Missing file extension for" 에러 해결
      }
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx']
  },
  ignorePatterns: ['build/', 'node_modules/', '.pnp.cjs', '.yarn/'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
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
    'comma-dangle': ['error', 'never'],
    'no-undef': 'off',
    'react/jsx-one-expression-per-line': ['off']
  }
};
