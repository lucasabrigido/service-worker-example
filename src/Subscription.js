const publicKey = "BIBMOBZCASzDBIHLtrdIWg7tfSlUho6q8KHlSiW3eOQKUfL8L9xVZVI_bTQGFxVvEGtkOmQxxObqcTkl9m0GiVY"; // process.env.PUBLIC_VAPID_KEY
const convertedVapidKey = urlBase64ToUint8Array(publicKey); //urlBase64ToUint8Array(process.env.REACT_APP_PUBLIC_VAPID_KEY)
const baseUrl = "https://kp10ik6n8i.execute-api.us-east-1.amazonaws.com/dev/public/notifications"; //process.env.BASE_URL

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    // eslint-disable-next-line
    const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function sendSubscription(subscription) {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function subscribeUser() {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        if (!registration.pushManager) {
            console.log('Push manager unavailable.');
            return;
        }
        const existedSubscription = await registration.pushManager.getSubscription();
        if (existedSubscription === null) {
            console.log('No subscription detected, make a request.');
            const newSubscription = await registration.pushManager.subscribe({
                applicationServerKey: convertedVapidKey,
                userVisibleOnly: true,
            }).catch(function(e) {
                if (Notification.permission !== 'granted') {
                    console.log('Permission was not granted.');
                } else {
                    console.error('An error ocurred during the subscription process.', e);
                }
            });
            console.log('New subscription added.', newSubscription);
            return sendSubscription(newSubscription);
        }
        console.log('Existed subscription detected.');
        // sendSubscription(existedSubscription);
    }
}