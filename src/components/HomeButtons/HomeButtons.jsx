import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './HomeButtons.module.scss';


export const HomeButtons = ({buttons}) => {
    const navigate = useNavigate();

    function handleNavigate(path) {
        return () => {
            navigate(path)
        };
    }

    return (
        <div className={styles.buttonsList}>
            {buttons.map(b => {
                return (
                    <button
                        key={b.title}
                        onClick={handleNavigate(b.path)}
                    >
                        {b.Icon}
                        <span>{b.title}</span>
                    </button>
                )
            })}
        </div>
    )
};

