module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  globals: {
    recordSaga: true,
    Intl: true,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // There are valid use cases for not listing every variable used in a hook as a dependency
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
}
