require('babel-core/register');
var merge = require('deepmerge');
var wdioConf = require('../master.conf.js');
var devConf = {
    services: ['sauce'],
    user: "",
    key: "",
    sauceConnect: false,
    capabilities: [
        {
            browserName: 'chrome'
        },
        {
            browserName: 'firefox'
        }],
    customConfig:
    {
        baseUrl: "http://www.google.com",
        searchTerm: "galaxy",
        phoneModel: "Samsung Note"
    }

};
exports.config = merge(wdioConf.config, devConf);