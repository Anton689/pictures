import React, {ChangeEvent} from 'react';
import s from './Select.module.css';
import {options} from '../tabs/Tabs';

type SelectType = {
    setCategoryOnClick: (category: string) => void
    category: string
}

export const Select = ({setCategoryOnClick, category}: SelectType) => {

    const selectCategoryOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategoryOnClick(e.currentTarget.value)
    }

    return (
        <>
            <select value={category}
                    onChange={selectCategoryOnChange}
                    className={s.select}>
                {
                    options.map(({name, id}) => (
                        <option key={id}
                                value={name}
                        className={s.options}>
                            {name}
                        </option>
                    ))
                }
            </select>

        </>
    );
};