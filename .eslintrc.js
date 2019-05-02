module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  globals: {
    $nuxt: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": "off",
    "spaced-comment": "off",
    "comma-dangle": ["warn", "always"],
    "object-curly-spacing": ["warn", "always"],
    "standard/object-curly-even-spacing": "off",
    "standard/array-bracket-even-spacing": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}
