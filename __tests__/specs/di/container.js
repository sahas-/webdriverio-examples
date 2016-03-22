import Bottle from 'bottlejs';
import {config} from '../../setup/test_helper';
import home_page_uimap from '../uimap/google_search_home.uimap';
import shopping_page_uimap from '../uimap/google_search_shopping.uimap';

export let di = new Bottle();
di.service('config', config);
di.service('homePage_ui',home_page_uimap);
di.service('shoppingPage_ui',shopping_page_uimap);


module.exports = di;
