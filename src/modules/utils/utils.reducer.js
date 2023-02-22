/* eslint-disable default-param-last */
import notification from '../../utils/notification';
import {UtilsActionTypes} from './utils.actions';

const initialState = {
    subscriptions: [],
};

export default function reducer(state = initialState, {type, payload, meta}) {
    switch (type) {
    case UtilsActionTypes.SET_LIST_SUBSCRIPTIONS:
        return {...state, subscriptions: payload.results};
    case UtilsActionTypes.ASYNC_SUCCESS_NEW_MESSAGE:
        notification('success', `messagem enviada com sucesso: ${meta.title}`)
        return state;
    default:
        return state;
    }
}
