const nextJest = require("next/jest");


const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    clearMocks: true,
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    "testEnvironment": "jsdom"
};
module.exports = createJestConfig(customJestConfig);