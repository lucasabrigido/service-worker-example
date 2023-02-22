import React from 'react';
import {toast} from 'react-toastify';

import ToastBody from '../components/ToastBody/toastBody';

const notification = (type, message, onClose = () => { }, autoClose = true) => {
    toast[type](<ToastBody type={type} message={message} />, {
        position: 'top-right',
        autoClose,
        closeButton: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        onClose,
    });
};

export default notification;
