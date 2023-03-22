import type { Config } from 'jest';

export default {
  moduleNameMapper: {
    '^#/(.+)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          target: 'es2022',
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: ['/node_modules/'],
} as Config;
