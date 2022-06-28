import React from 'react';
import s from './LoadButton.module.css';

type LoadButtonType = {
    onClick: () => void
}


export const LoadButton = ({onClick}:LoadButtonType) => {

    const handleOnclick = () => {
        onClick()
    }

    return (
        <div className={s.inner}>
            <button onClick={handleOnclick}
                    className={s.button}>
                load more
            </button>
        </div>
    );
};