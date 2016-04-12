import {envSettings} from '../setup/test_helper';
import uimap from '../uimap/google_search_home.uimap';
let _elements;


export default class search_page {
    constructor() {
        _elements = new uimap();
    }

    get browser() {
        return browser;
    }
    navigate() {
       browser.url(envSettings.baseUrl);
    }
    isItGoogle() {
        return browser.getUrl();
    }
    search() {
        browser.setValue(_elements.searchbox, envSettings.searchTerm);
        browser.keys('Enter');
        browser.waitForVisible(_elements.resultStatus,envSettings.assertionWaitTime);
        let result = browser.getText(_elements.resultStatus);
        return result;
    }
    
}
