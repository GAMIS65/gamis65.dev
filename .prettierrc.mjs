/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

