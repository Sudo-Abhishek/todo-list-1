module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
      },
      testEnvironment: 'jsdom',
      moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
      testMatch: [
        '<rootDir>/src/__tests__/**/*.test.tsx', 
      ],
}