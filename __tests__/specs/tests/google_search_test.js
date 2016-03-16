import {
    browser,
    chai,
    chaiAsPromised,
    expect
}from '../../setup/test_helper';
import google_search_page from '../pageobjects/google_search.page';
let _google_search_page;

before(() => {
    chai.Should();
    chai.use(chaiAsPromised);
    chaiAsPromised.transferPromiseness = browser.transferPromiseness;
});

describe('Feature: getting started with webdriver.io', () => {
    context('Scenario: Navigate to Google', () => {
        before(() => {
            _google_search_page = new google_search_page();
        });
        
        it('Should open up the browser and navigate to Google', (done) => {
            _google_search_page.navigateTo((result)=>{
                chai.expect(result).to.be.true;
                done();
            });
           
        });
        
        it('Should be able to perform search', (done) => {
            _google_search_page.search("superman", (result)=>{
                chai.expect(result).to.be.true;
                done();                
            });
        });
        
        it('Should contain results', (done) => {
            _google_search_page.areThereResults((result)=>{
                chai.expect(result).to.be.true;
                done();
            });
        });
    })
})

after(() => {
    _google_search_page.end();
});

