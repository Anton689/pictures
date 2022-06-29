import React, {useEffect, useState} from 'react';
import s from './Pictures.module.css'
import {ImagesType} from '../../types/types';

type PicturesType = {
    pictures: ImagesType
    setCategoryOnClick: (category: string) => void
    deleteItem: (key: string, id: number, active: boolean) => void
}

export const Pictures = ({pictures, setCategoryOnClick, deleteItem}: PicturesType) => {

    const [changedPics, setChangedPics] = useState(pictures)

    useEffect(() => {
        setChangedPics(pictures)
    }, [pictures])

    const onSetCategoryClick = (category: string) => {
        setCategoryOnClick(category)
    }

    const changeIsActiveOnclick = (itemId: number) => {
        setChangedPics(changedPics.map(p => {
                if (p.id === itemId) {
                    return {...p, isActive: !p.isActive}
                } else {
                    return {...p, isActive: false}
                }
            })
        )
    }

    const onDeleteClick = (e: React.KeyboardEvent, id: number, isActive: boolean) => {
        deleteItem(e.key, id, isActive)
    }

    return (
        <div className={s.grid}>
            {
                changedPics.map(p => (
                    <div key={p.id}
                         onClick={() => {
                             changeIsActiveOnclick(p.id)
                         }}
                         tabIndex={-1}
                         onKeyDown={(e) => {
                             onDeleteClick(e, p.id, p.isActive)
                         }}
                         className={p.isActive ? s.active : s.gridItem}>

                        <img className={s.img}
                             src={p.img}
                             alt="img"/>

                        <div className={s.inner}>
                            <button onClick={(e) => {
                                onSetCategoryClick(e.currentTarget.innerText)
                                e.stopPropagation()
                            }}
                                    className={s.button}>
                                {p.category}
                            </button>
                            <h2 className={s.name}>
                                {p.name}
                            </h2>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
