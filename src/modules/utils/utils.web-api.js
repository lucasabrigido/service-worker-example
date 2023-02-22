import {Get, Post} from '../../utils/public-api-base';

export const urls = {
    notification: '/public/notifications',
    new: '/public/notifications/global',
};

export async function list() {
    return Get(urls.notification);
}

export async function newPush(title) {
    return Get(urls.new + title ? `?title=${title}` : title);
}

export async function subscription(payload) {
    return Post(urls.notification, payload);
}
