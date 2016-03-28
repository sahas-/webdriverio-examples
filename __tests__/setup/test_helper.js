var webdriverio = require('webdriverio');
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import expect from 'expect';
chai.use(chaiAsPromised);
chai.use(expect);
import Q from 'q';
import config from '../test.conf';
let _config = new config();
let browser = webdriverio.remote(_config.browserOptions());//leave it empty for local run

export{
	browser,
	chai,
    Q,
    config  
};