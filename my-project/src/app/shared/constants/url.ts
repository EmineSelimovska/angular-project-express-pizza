import { environment } from "src/environments/environment";
// const url = environment.production? '' : "http://localhost:5000";
const url = "http://localhost:5000";

export const FOODS_URL = url + '/api/foods';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOODS_BY_ID_URL = FOODS_URL + '/';

export const USER_LOGIN_URL = url + '/api/users/login';
export const USER_REGISTER_URL = url + '/api/users/register';
export const USER_PROFILE_URL = url + '/api/users/profile/';


export const ORDERS_URL = url + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_ORDER_URL = ORDERS_URL + '/newOrder';
export const Order_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';











