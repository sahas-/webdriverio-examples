import {
    chai,
    envSettings
}from '../../setup/test_helper';
import di from '../di/container';
let _ex;


describe('Feature: getting started with webdriver.io', () => {
    //get exceptionHandler instantiated to handle exceptions at one place
    before(() => {
        _ex = di.container.exceptionHandler;
    });

    describe('Google search', () => {
        let _page;
        //instantiate the page object
        before(() => {
            _page = di.container.home_page;
        })
        //perform action
        it('Should open up the browser, navigate to Google, search and assert search results', ()=> {
            _page.navigate(browser.options.customConfig.baseUrl);
            chai.expect(_page.isItGoogle()).to.contain("google.com");
            let _results =_page.search(browser.options.customConfig.searchTerm);
            chai.expect(_results).to.contain("About");
            chai.expect(_results).to.contain("results");
            chai.expect(_results).to.contain("seconds");
    });

    describe('Shop from the search results', () => {
        let _page;
        //instantiate the page object
        before(() => {
            _page = di.container.shopping_page;
        })
        //perform actions
        describe('Shop from Google search', () => {
            it('Should list relevant products for shopping', () => {
                _page.navigateToShoppingTab();
            });
        });

        describe('Filter items', () => {
            it('Should filter unlocked phones', () => {
                _page.filterNewPhones();
                _page.filterSpecificModel();
            })
        });
    })

});
});



