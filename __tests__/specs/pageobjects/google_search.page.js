import {browser} from '../../setup/test_helper';
import promise from 'promise';
import config from '../../test.conf.js'

let _browser, _configs, _elements;

class search_page_elements {
    get searchbox() {
        return '#lst-ib';
    }
    get resultStatus() {
        return '#resultStats';
    }
}

export default class search_page {
    constructor() {
        browser.endAll();
        _configs = new config();
        _browser = browser.init().timeoutsImplicitWait(_configs.defaultTimeout);
        _elements = new search_page_elements();
    }

    navigateTo(done) {
        _browser.url(_configs.baseUrl)
            .getUrl()
            .then((url) => {
                done(url.indexOf("www.google.com") > -1 ? true : false);
            });
    }

    search(searchString, done) {
        _browser
            .setValue(_elements.searchbox, searchString)
            .keys(['Enter'])
            .getUrl()
            .then((url) => {
                done(url.indexOf("#q="+searchString) > -1 ? true : false);
            });
    }

    areThereResults(done) {
        _browser
            .getText(_elements.resultStatus).then((result) => {
                let results = this.doesItContain(result,"results");
                let about = this.doesItContain(result,"About");
                let seconds = this.doesItContain(result,"seconds");
                done(results && about && seconds);
            })
    }
    
    doesItContain(result,searchItem){
        return (result.indexOf(searchItem)>-1?true:false);
    }
    
    end() {
        _browser.end();
    }
}
