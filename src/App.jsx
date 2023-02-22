import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';

import MissingPage from './pages/Missing/Missing';
import NewMessage from './pages/NewMessage/NewMessage';
import Subscription from './pages/Subscriptions/Subscriptions';
import routes from './utils/routes';

function App() {
    return (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.NOT_FOUND} element={<MissingPage />} />
            <Route path={routes.LIST_SUBSCRIPTIONS} element={<Subscription />} />
            <Route path={routes.NEW_MESSAGE} element={<NewMessage />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
}

export default App;