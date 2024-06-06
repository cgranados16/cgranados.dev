const {
  createGlobPatternsForDependencies,
} = require('@nxtensions/astro/tailwind');
const { join } = require('path');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('./preset.cjs')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...fontFamily.sans],
      },
    },
  },
};
