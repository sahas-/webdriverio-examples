import {
    browser,
    chai,
    chaiAsPromised,
    expect
}from '../../setup/test_helper';
import google_search_page from '../pageobjects/google_search.page';

before(() => {
    chai.Should();
    chai.use(chaiAsPromised);
    chaiAsPromised.transferPromiseness = browser.transferPromiseness;
});

describe('Feature: getting started with webdriver.io', () => {
    context('Scenario: Navigate to Google', () => {
        before(() => {
            google_search_page.init.bind(this);
        });
        it('Should open up the browser and navigate to Google', () => {
            google_search_page.open.call(this);
            return google_search_page.isItGoogle()
            .then((msg) => {
                return chai.assert(true,msg);
            },(error)=>{                
                return chai.assert(false,error);
            });
           
        });
        xit('Should be able to perform search', () => {
            google_search_page.search('superman');
        });
        xit('Should contain results', () => {
            return browser
                .getText('#resultStats').then((t) => {
                    chai.expect(t).to.have.string('About');
                    chai.expect(t).to.have.string('results')
                    chai.expect(t).to.have.string('seconds)');
                })
                .end();
        });
    })
})

after(() => {
    browser.close();
});

