import {browser} from '../../setup/test_helper';
import promise from 'promise';
let _driver;

class search_page {
    getme(locator) {
        switch (locator) {
            case 'searchbox':
                return browser.element('#lst-ib');
            case 'resultStatus':
                return browser.element('#resultStats');
            default:
                return "invalid";
        }
    }
    init() {
        return browser.init().timeoutsImplicitWait(5000);
    }
    open() {
        browser.url('http://www.google.com');
    }
    isItGoogle() {
        return new promise((fulfill, reject) => {
            browser.waitUntil(()=>{
                console.log('waiting for render');
                console.log(browser.getTitle());
                return this.title().then((t)=>{
                    console.log(t);
                    return (t.value === 'Google') ? fulfill("It's Google website") : reject("It's not Google website");
                })
            })
            // browser.title()
            //     .then((t) => {
            //         console.log(t.value);
            //         (t.value === 'Google') ? fulfill("It's Google website") : reject("It's not Google website");
            //     });
        });
    }
    search(searchString) {
        try {
            browser
                .setValue(getme('searchbox'), searchString)
                .keys(['Enter']).then()
            //.element('#resultStats');
        }
        catch (error) {
            console.log("caught exception");
            reject(false);
        }
    }

}

module.exports = new search_page();