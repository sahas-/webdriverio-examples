var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'phantomjs' } };
var client = webdriverio.remote(options);

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import expect from 'expect';

export{
	client,
	chai,
	chaiAsPromised,
	expect
};