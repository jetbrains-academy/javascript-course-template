export default {
    projects: [
        {
            displayName: "node-tests", // For Node.js tests
            testEnvironment: "node",
            testMatch: ["**/test/*.js"], // Match backend tests
            transform: { }, // An empty transform to skip Babel
            moduleNameMapper: {  // Tell Jest to map the #utils/* alias
                '^#utils/(.*)$': '<rootDir>/utils/$1',
            },
        },

        // You can skip this block if no React tests are needed in your course
        {
            displayName: "react-tests", // For React tests
            testEnvironment: "jsdom",
            testMatch: ["**/test/*.jsx"], // Match frontend tests
            extensionsToTreatAsEsm: [".jsx"],
            transform: {
                "^.+\\.(jsx)$": ["babel-jest", { configFile: "./babel.config.cjs" }],
            },
            moduleNameMapper: {  // Tell Jest to map the #utils/* alias
                '^#utils/(.*)$': '<rootDir>/utils/$1',
            },
        },
    ],
};
