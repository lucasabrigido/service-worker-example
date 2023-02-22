import React, {useLayoutEffect, useState} from 'react';
import {Router} from 'react-router-dom';
import {browserHistory} from '../../store/root-reducer';

export default function CustomRouter({basename, history, children}) {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    });
    useLayoutEffect(() => history.listen(setState), [history]);
    return (
        <Router
            navigator={browserHistory}
            location={state.location}
            navigationType={state.action}
            basename={basename}
        >
            {children}
        </Router>
    );
}
