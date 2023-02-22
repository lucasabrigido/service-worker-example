import {put, all, takeEvery} from 'redux-saga/effects';
import notification from '../../utils/notification';

// import { asyncSubscription, setSubscription, UtilsActionTypes } from './utils.actions';
import { asyncSubscription, UtilsActionTypes } from './utils.actions';

// import { list } from './utils.web-api';

function* doListSubscription({payload}) {
    try {
        // const {results} = yield call(list);
        // yield put(setSubscription(result s));
        yield put(asyncSubscription());
    } catch (error) {
        console.log(error);
    }
}

function* successMessage({payload, meta}) {
    try {
        console.log('payload, meta', payload, meta);
        yield notification('success', meta.title);
    } catch (error) {
        console.log(error);
    }
}


export default function* AuthSaga() {
    yield all([
        yield takeEvery(UtilsActionTypes.ASYNC_LIST_SUBSCRIPTION_SAGA, doListSubscription),
        yield takeEvery(UtilsActionTypes.ASYNC_SUCCESS_NEW_MESSAGE, successMessage),
    ]);
}
