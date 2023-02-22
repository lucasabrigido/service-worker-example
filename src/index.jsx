import React from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import ReactDOM from 'react-dom/client';
import store from './store/redux-store';
import {browserHistory} from './store/root-reducer';
import CustomRouter from './components/CustomRouter/CustomRouter';
import register from './ServiceWorker';

import App from './App';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { subscribeUser } from './Subscription';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <CustomRouter history={browserHistory}>
            <App />
            <ToastContainer />
        </CustomRouter>
    </Provider>,
);

register();
subscribeUser();