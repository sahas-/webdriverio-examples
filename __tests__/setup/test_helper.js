var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var browser = webdriverio.remote(options);

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import expect from 'expect';

export{
	browser,
	chai,
	chaiAsPromised,
	expect
};