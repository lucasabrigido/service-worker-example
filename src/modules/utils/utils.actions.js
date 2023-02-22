export const UtilsActionTypes = {
    SET_LIST_SUBSCRIPTIONS: '@utils/SET_LIST_SUBSCRIPTIONS',
    ASYNC_LIST_SUBSCRIPTION_SAGA: '@utils/ASYNC_LIST_SUBSCRIPTION_SAGA',
    ASYNC_LIST_SUBSCRIPTION: '@utils/ASYNC_LIST_SUBSCRIPTION',
    ASYNC_SUCCESS_NEW_MESSAGE: '@utils/ASYNC_SUCCESS_NEW_MESSAGE',
};

export const setSubscription = (list) => ({
    type: UtilsActionTypes.SET_LIST_SUBSCRIPTIONS,
    payload: list,
});

export const asyncSubscriptionSaga = () => ({
    type: UtilsActionTypes.ASYNC_LIST_SUBSCRIPTION_SAGA,
});

export const asyncSubscription = () => ({
    type: UtilsActionTypes.ASYNC_LIST_SUBSCRIPTION,
    meta: {
        offline: {
          effect: { url: 'https://kp10ik6n8i.execute-api.us-east-1.amazonaws.com/dev/public/notifications', method: 'GET' },
          commit: { type: UtilsActionTypes.SET_LIST_SUBSCRIPTIONS },
        }
    }
});

export const asyncNewMessage = (title) => ({
    type: UtilsActionTypes.ASYNC_LIST_SUBSCRIPTION,
    meta: {
        offline: {
          effect: { url: `https://kp10ik6n8i.execute-api.us-east-1.amazonaws.com/dev/public/notifications/global${title ? `?title=${title}` : ''}`, method: 'GET' },
          commit: { type: UtilsActionTypes.ASYNC_SUCCESS_NEW_MESSAGE, meta: {title} },
        }
    }
});

