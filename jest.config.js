module.exports = {
    setupFiles: ["<rootDir>/app/javascript/__tests__/setup.js"],
    collectCoverageFrom: [
        "<rootDir>/app/javascript/assets/**/*.{js,jsx}",
        "!<rootDir>/app/javascript/assets/**/index.js",
        "!<rootDir>/app/javascript/config/*.js",
        "!<rootDir>/app/javascript/assets/tests/**/*.(spec|test).{js,jsx}"
    ],
    moduleNameMapper: {
        ".+\\.(css|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules",
        "<rootDir>/app/javascript/assets/index.js",
        "<rootDir>/app/javascript/assets/store/configureStore.js",
    ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
    testMatch: [
        "<rootDir>/app/javascript/__tests__/**/*.(spec|test).{js,jsx}",
    ],
    transform: {
        "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
};
