import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncNewMessage } from '../../modules/utils/utils.actions';

const NewMessage = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();


    const onClick = () => {
        dispatch(asyncNewMessage(value));
    };

    return (
        <div>
            <input value={value} onChange={({target}) => setValue(target.value) } />
            <button disabled={!value} onClick={onClick}>Enviar</button>
        </div>
    )
};

export default NewMessage;