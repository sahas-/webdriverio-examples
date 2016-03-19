import {
    browser,
    chai,
    Q,
    config
}from '../../setup/test_helper';
import google_search_page from '../pageobjects/google_search_home.page';
import google_search_shopping_page from '../pageobjects/google_search_shopping.page';
let _google_search_page, _configs, _google_shopping_page;


describe('Feature: getting started with webdriver.io', () => {
    before(() => {
        _configs = new config();
        _google_search_page = new google_search_page();
        _google_shopping_page = new google_search_shopping_page(_google_search_page.browser);
    });

    describe('Simple google search', () => {
        it('Should open up the browser, navigate to Google, search and assert search results', (done) => {
            let _g = _google_search_page;
            return _g.navigate()
                .then(_g.search)
                .then(_g.areThereResults)
                .then(undefined, (error) => { console.log(error); done(error) })
                .finally(done);
        });
    });
    describe('Shop from Google search', () => {
        it('Should list relevant products for shopping', (done) => {
            let _g = _google_shopping_page;
            return _g.navigate().then(()=>{
                done();
            },(error)=>{
                return done(error);
            })
        });
    });
})

after(() => {
    _google_search_page.end();
});

