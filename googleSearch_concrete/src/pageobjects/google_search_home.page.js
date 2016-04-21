import settings from '../../settings.json';
import uimap from '../uimap/google_search_home.uimap';
let _elements;


export default class search_page {
    constructor() {
        _elements = new uimap();
    }

    get browser() {
        return browser;
    }
    navigate(url) {
       browser.url(url);
    }
    isItGoogle() {
        return browser.getUrl();
    }
    search(searchTerm) {
        browser.setValue(_elements.searchbox,searchTerm);
        browser.keys('Enter');
        browser.waitForVisible(_elements.resultStatus,settings._waitUntil);
        let result = browser.getText(_elements.resultStatus);
        return result;
    }
    
}
