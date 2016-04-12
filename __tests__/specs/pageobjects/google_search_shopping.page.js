import {browser, Q,envSettings} from '../../setup/test_helper';
import uimap from '../uimap/google_search_shopping.uimap';

let  _browser,_waitUntil, _elements;

export default class shopping_page {
    constructor(browser) {
        _elements = new uimap();
        _browser = browser;
    }

    navigateToShoppingTab() {
        _browser.waitUntil("=" + _elements.shoppingTab,envSettings.assertionWaitTime);
        _browser.click("=" + _elements.shoppingTab);
        return _browser;
    }

    filterNewPhones() {
        _browser.waitForVisible("=" + _elements.newPhonesFilter,_waitUntil);
        _browser.click("=" + _elements.newPhonesFilter);
        return _browser;
    }
    filterSpecificModel() {
        _browser.keys('Pagedown');
        _browser.pause(2000); //https://github.com/webdriverio/webdriverio/issues/1188
        _browser.waitForVisible("=" + _elements.phoneModel,_waitUntil);
        _browser.click("=" + _elements.phoneModel);
        return _browser;
    }
}