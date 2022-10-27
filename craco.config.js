const path = require("path");

module.exports = {
    vite: {
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@services": path.resolve(__dirname, "src/services/"),
            "@src/types": path.resolve(__dirname, "src/types/"),
            "@hooks/*": path.resolve(__dirname, "src/hooks/*"),
            "@routes/*": path.resolve(__dirname, "src/routes/*"),
            "@ui/*": path.resolve(__dirname, "src/ui/*"),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^@components(.*)$": "<rootDir>/src/components$1"
            }
        }
    }
};