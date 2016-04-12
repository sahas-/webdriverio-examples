import Bottle from 'bottlejs';
import exceptionHandler from '../../utility/exceptionHandler';
import {home_page_uimap,shopping_page_uimap,home_page,shopping_page} from 'googlesearch_concrete';
//import  from '../uimap/google_search_shopping.uimap';
//import home_page from '../pageobjects/google_search_home.page';
//import shopping_page from '../pageobjects/google_search_shopping.page';
//import exceptionHandler from '../../utility/exceptionHandler';

export let di = new Bottle();
di.service('homePage_ui',home_page_uimap);
di.service('shoppingPage_ui',shopping_page_uimap);
di.service('home_page',home_page);
di.service('exceptionHandler',exceptionHandler);
//return shopping page along with the browser instance from the previous page
di.factory('shopping_page',()=>{
    return new shopping_page(di.container.home_page.browser);
});


module.exports = di;
