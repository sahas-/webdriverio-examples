import {
    chai
}from '../../setup/test_helper';
import di from '../di/container';
let _google_search_page, _configs, _google_shopping_page;


describe('Feature: getting started with webdriver.io', () => {
    before(() => {
        _configs = di.container.config;
    });

    describe('Simple google search', () => {
        it('Should open up the browser, navigate to Google, search and assert search results', (done) => {
            let _g = di.container.home_page;
            return _g.navigate()
                .then(_g.search)
                .then(_g.areThereResults)
                .then(undefined, (error) => { console.log(error); done(error) })
                .finally(done);
        });
    });

    describe('Shop from the search results', () => {
        let _g;

        before(() => {
            _g = di.container.shopping_page;
        })
        describe('Shop from Google search', () => {
            it('Should list relevant products for shopping', (done) => {
                return _g.navigate().then(() => {
                    done();
                }, (error) => {
                    return done(error);
                })
            });
        });

        describe('Filter items', () => {
            it('Should filter unlocked phones', (done) => {
                return _g.filterNewPhones().then(() => {
                    done();
                }, (error) => {
                    return done(error);
                })
            })
        })
    })


})

after(() => {
    //end the browser here
});

