import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {combineReducers} from 'redux';
import utils from '../modules/utils/utils.reducer';

export const browserHistory = createBrowserHistory();

const RootReducer = combineReducers({
    router: connectRouter(browserHistory),
    utils,
});

export default RootReducer;
