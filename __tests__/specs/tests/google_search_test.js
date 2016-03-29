import {
    chai
}from '../../setup/test_helper';
import di from '../di/container';
let _ex;


describe('Feature: getting started with webdriver.io', () => {
    before(() => {
        _ex = di.container.exceptionHandler;
    });

    describe('Simple google search', () => {
        let _page;
        before(() => {
            _page = di.container.home_page;
        })

        it('Should open up the browser, navigate to Google, search and assert search results', (done) => {
            return _page.navigate()
                .then(_page.search)
                .then(_page.areThereResults)
                .catch((error) => {
                    _ex.handleException(error, "Navigate to Google"); //get current spec name
                    done(error);
                })
                .finally(done);
        });

        afterEach((done) => {
            if (_ex.status.isSuccess === false) {
                _page.end().then(done)
                process.exit();
            }
            else {
                done();
            }
        })
    });

    describe('Shop from the search results', () => {
        let _page;

        before(() => {
            _page = di.container.shopping_page;
        })
        describe('Shop from Google search', () => {
            it('Should list relevant products for shopping', (done) => {
                return _page.navigateToShoppingTab()
                    .then(() => {
                        done();
                    })
                    .catch((error) => {
                        _ex.handleException(error, "navigate to shopping tab");
                    })
            });
        });

        describe('Filter items', () => {
            it('Should filter unlocked phones', (done) => {
                return _page.filterNewPhones()
                    .then(() => {
                        done();
                    })
                    .catch((error) => {
                        _ex.handleException(error, "filter new phones");
                    })
            })
        })
        afterEach((done)=>{
            if (_ex.status.isSuccess === false) {
                _page.end().then(done);
                process.exit();
            }
            else {
                done();
            }
        })


        after((done) => {
            _page.end().then(done);
        })
    })

});



