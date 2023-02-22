import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSubscriptionSaga } from '../../modules/utils/utils.actions';
import selectorListSubscriptions from '../../modules/utils/utils.selectors';

const Subscription = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectorListSubscriptions);

    useEffect(() => {
        dispatch(asyncSubscriptionSaga());
    }, [dispatch]);

    return (
        <div>
            {list?.map(e => (<span style={{display: 'block'}} key={e.id}>{e.id}</span>))}
        </div>
    )
};

export default Subscription;