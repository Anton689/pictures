import React from 'react';
import s from './LoadButton.module.css';

type LoadButtonType = {
    onClick: () => void
    disable: boolean
}


export const LoadButton = ({onClick, disable}: LoadButtonType) => {

    const handleOnclick = () => {
        onClick()
    }

    return (
        <div className={s.inner}>
            <button onClick={handleOnclick}
                    disabled={disable}
                    className={s.button}>
                load more
            </button>
        </div>
    );
};