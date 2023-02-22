import React from 'react';
import {XCircle} from 'phosphor-react';

import styles from './toastBody.module.scss';

export const types = {
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
};

function ToastBody({closeToast, message, type}) {
    return (
        <div className={type === 'warning' ? styles.body_warning : styles.body}>
            <div className={styles.grow}>
                <p className={styles.message}>{message}</p>
                <button className={styles.toast_button} type='button' onClick={closeToast}>
                    <XCircle className={styles.close} size={32} color='#202536' />
                </button>
            </div>
        </div>
    );
}

export default ToastBody;
