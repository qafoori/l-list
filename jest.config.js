const jestConfig = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.rollup.cache/',
  ],
  moduleNameMapper: {
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
  modulePaths: ['<rootDir>/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

module.exports = jestConfig
