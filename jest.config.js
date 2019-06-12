module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  testEnvironment: 'node'
};
