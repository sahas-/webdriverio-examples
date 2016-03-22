import {browser, Q} from '../../setup/test_helper';
import di from '../di/container';

let _browser, _configs, _elements;

export default class shopping_page {
    constructor(browser) {
        _configs = di.container.config;
        _elements = di.container.shoppingPage_ui;
        _browser = browser;        
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