import settings from '../../settings.json';
import uimap from '../uimap/google_search_shopping.uimap';
import Q from 'q';

let  _browser, _elements;

export default class shopping_page {
    constructor(browser) {
        _elements = new uimap();
        _browser = browser;
    }

    navigateToShoppingTab() {
        _browser.waitUntil("=" + _elements.shoppingTab,settings._waitUntil);
        _browser.click("=" + _elements.shoppingTab);
        return _browser;
    }

    filterNewPhones() {
        try{
            _browser.waitForVisible("=" + _elements.newPhonesFilter,settings._waitUntil)
            _browser.click("=" + _elements.newPhonesFilter);
            Q.resolve(_browser);
        }
        catch(exception){
            let error = {
                isSuccess:false,
                message: "caught exception while filtering new for new phone",
                stack: exception,
            }
            Q.reject(error);
        }
         
       
        

    }
    filterSpecificModel() {
        _browser.keys('Pagedown');
        _browser.pause(2000); //https://github.com/webdriverio/webdriverio/issues/1188
        _browser.waitForVisible("=" + _elements.phoneModel,settings._waitUntil);
        _browser.click("=" + _elements.phoneModel);
        return _browser;
    }
}
