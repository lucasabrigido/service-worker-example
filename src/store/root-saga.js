import {all} from 'redux-saga/effects';
import utils from '../modules/utils/utils.saga';

export default function* RootSaga() {
    yield all([
        utils(),
    ]);
}
