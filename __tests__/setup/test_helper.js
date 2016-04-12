import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import expect from 'expect';
chai.use(chaiAsPromised);
chai.use(expect);
import Q from 'q';
import envSettings from '../envSettings.json';

export {
    chai,
    Q,
    envSettings
};