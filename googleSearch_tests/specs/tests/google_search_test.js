import {
    chai
}from '../../setup/test_helper';
import di from '../di/container';
let _ex;


describe('Feature: getting started with webdriver.io', () => {
    //get exceptionHandler instantiated to handle exceptions at one place
    before(() => {
        _ex = di.container.exceptionHandler;
    });

    describe('Google search', () => {
        let _page, _asserts;
        //instantiate the page object
        before(() => {
            _page = di.container.home_page;
            _asserts = new assertionHelpers();
        })
        describe('Naigate to Google', () => {
            it('should navigate to google', () => {
                _page.navigate(browser.options.customConfig.baseUrl);
                chai.expect(_asserts.assertNavigation(_page.isItGoogle()),"expecting to be in google.com").to.be.true;
            })

        });
        describe('Perform search', () => {
            it('should search for product', () => {
                let _results = _page.search(browser.options.customConfig.searchTerm);
                chai.expect(_asserts.assertSearch(_results),"expecting products to be listed").to.be.true;
            })
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
                })
            });

            describe('Filter specific model', () => {
                it('should filter a specific model', () => {
                    _page.filterSpecificModel();
                })
            })
        })

    });
});

export class assertionHelpers {
    //expected url to contain google.com
    assertNavigation(result) {
        return this.doesItcontain(result, "google.com");
    }
    assertSearch(results) {
        return this.doesItcontain(results, "About") && this.doesItcontain(results, "results") && this.doesItcontain(results, "seconds");
    }
    doesItcontain(str, substr) {
        return str.indexOf(substr) > -1;
    }
}

