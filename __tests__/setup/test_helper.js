var webdriverio = require('webdriverio');
var options = { 
	// host: "localhost",
	// port: "4444",
	desiredCapabilities: { browserName: 'chrome' } 
};
var browser = webdriverio.remote(options);

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import expect from 'expect';
chai.use(chaiAsPromised);
chai.use(expect);
export{
	browser,
	chai,
};