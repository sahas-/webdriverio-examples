import {browser, config, Q} from '../../setup/test_helper';

let _browser, _configs, _elements;

class shopping_page_elements {
    get shoppingLink() {
        return '#lst-ib';
    }
    get phoneModel(){
        return "Galaxy Note";
    }
    get type(){
        return "GSM";
    }
    get shoppingTab(){
        return "Shopping";
    }
    get results(){
        return ".sh-pr__product-results";
    }
}

export default class shopping_page {
    constructor(browser) {
        _configs = new config();
        _browser = browser;
        _elements = new shopping_page_elements();
    }
    navigate() {
        let deferred = Q.defer();
        _browser
        .click("="+_elements.shoppingTab)
        .click("="+_elements.phoneModel)
        .elements(_elements.results)
        .then((elements)=>{
            (elements.value.length>0)?deferred.resolve():deferred.reject("no such element - "+_elements.results);
        },(error)=>{
            deferred.reject(error);
        })
        return deferred.promise;
    }
}