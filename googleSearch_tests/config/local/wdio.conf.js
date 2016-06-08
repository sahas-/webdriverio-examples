require('babel-core/register');
var merge = require('deepmerge');
var wdioConf = require('../master.conf.js');
var devConf = {
    services: ['selenium-standalone'],
    capabilities: [{
        browserName: 'chrome'
    }],
    customConfig:
    {
        baseUrl: "http://www.google.com",
        searchTerm: "galaxy",
        phoneModel: "Samsung Note"
    }

};
exports.config = merge(wdioConf.config, devConf);