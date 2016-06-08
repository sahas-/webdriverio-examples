require('babel-core/register');
exports.config = {
    specs: [
        './**/google_search_test.js'
    ],
    waitforTimeout: 20000,
    framework: 'mocha',
    reporters: ['dot', 'junit','allure'],
    reporterOptions: {
        outputDir: './junit-xml-results/',
        allure: {
            outputDir: './allure-results'
        }
    },

    mochaOpts: {
        ui: 'bdd',
        bail: 'true'
    },
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent'
};
