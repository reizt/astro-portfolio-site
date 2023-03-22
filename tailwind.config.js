const keysToMap = (keys, keyToValue) => {
  const map = {};
  keys.forEach((key) => {
    map[key] = keyToValue(key);
  });
  return map;
};

const pixels = new Set([
  0, 4, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 100, 120, 140, 160, 164, 180, 300, 1000,
]);

const remsMap = keysToMap(pixels, (px) => `${px / 10}rem`);

const fullScreenClasses = {
  'full-screen-x': '100vw',
  'full-screen-y': '100vh',
  'half-screen-x': '50vw',
  'half-screen-y': '50vh',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing: {
      ...remsMap,
      ...fullScreenClasses,
      auto: 'auto',
      initial: 'initial',
    },
    borderRadius: { ...remsMap, full: '100%' },
    fontSize: { ...remsMap },
    screens: {
      xs: { min: '0px', max: '479px' },
      sm: { min: '480px', max: '639px' },
      md: { min: '640px', max: '768px' },
      lg: { min: '768px', max: '1023px' },
      xl: { min: '1024px', max: '1279px' },
      '2xl': { min: '1280px', max: '1536px' },
    },
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
    extend: {
      maxWidth: { ...remsMap, ...fullScreenClasses },
      maxHeight: { ...remsMap, ...fullScreenClasses },
      minWidth: { ...remsMap, ...fullScreenClasses },
      minHeight: { ...remsMap, ...fullScreenClasses },
      transitionDuration: {
        hover: '300ms',
      },
    },
  },
  plugins: [],
};
