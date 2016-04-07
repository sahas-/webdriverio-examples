import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import expect from 'expect';
chai.use(chaiAsPromised);
chai.use(expect);
import Q from 'q';
import config from '../test.conf';

export {
chai,
Q,
config
};