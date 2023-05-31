const keysToMap = (keys, keyToValue) => {
  const map = {};
  keys.forEach((key) => {
    map[key] = keyToValue(key);
  });
  return map;
};

const pixels = new Set([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 100, 120, 140, 160, 164, 180, 200, 300, 600,
  1000,
]);

const remsMap = keysToMap(pixels, (px) => `${px / 10}rem`);

const screenClassNames = {
  'full-screen-x': '100vw',
  'full-screen-y': '100vh',
  'half-screen-x': '50vw',
  'half-screen-y': '50vh',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/index.html'],
  theme: {
    spacing: {
      ...remsMap,
      ...screenClassNames,
      auto: 'auto',
      initial: 'initial',
    },
    borderRadius: { ...remsMap, full: '100%' },
    fontSize: { ...remsMap },
    colors: {
      white: {
        DEFAULT: '#ffffff',
        300: '#d1d1d1',
        500: '#94a3b8',
        900: '#777777',
      },
      black: {
        DEFAULT: '#000000',
        300: '#111729',
        500: '#1e293b',
        600: '#394a61',
        700: '#475569',
      },
      blue: {
        DEFAULT: '#0ea5e9',
        300: '#63bae2',
      },
    },
    fontFamily: {
      mono: ['monospace', 'sans-serif'],
    },
    extend: {
      maxWidth: { ...remsMap, ...screenClassNames },
      maxHeight: { ...remsMap, ...screenClassNames },
      minWidth: { ...remsMap, ...screenClassNames },
      minHeight: { ...remsMap, ...screenClassNames },
      transitionDuration: {
        hover: '300ms',
      },
      boxShadow: {
        dot: '0 0 2rem var(--tw-shadow)',
      },
    },
  },
  plugins: [],
};
