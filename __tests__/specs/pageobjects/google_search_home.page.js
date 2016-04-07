import {config} from '../../setup/test_helper';
import uimap from '../uimap/google_search_home.uimap';
let _configs, _elements;


export default class search_page {
    constructor() {
        _configs = new config();
        _elements = new uimap();
    }
    get browser() {
        return browser;
    }
    navigate() {
        browser.url(_configs.baseUrl);
    }
    isItGoogle() {
        return browser.getUrl();
    }
    search() {
        browser.setValue(_elements.searchbox, _configs.searchTerm);
        browser.keys('Enter');
        browser.waitForVisible(_elements.resultStatus,5000);
        let result = browser.getText(_elements.resultStatus);
        return result;
    }
}
