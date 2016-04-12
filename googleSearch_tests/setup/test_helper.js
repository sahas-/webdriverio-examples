import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import expect from 'expect';
chai.use(chaiAsPromised);
chai.use(expect);
import envSettings from '../envSettings';

export {
    chai,
    envSettings
};