import React, {useEffect, useState, KeyboardEvent} from 'react';
import s from './Pictures.module.css'
import {ImagesType} from '../../types/types';
import {log} from 'util';

type PicturesType = {
    pictures: ImagesType
    setCategoryOnClick: (category: string) => void
    hadler: (key: string, id: number) => void
}

export const Pictures = ({pictures, setCategoryOnClick, hadler}: PicturesType) => {

    const [changedPics, setChangedPics] = useState(pictures)

    useEffect(()=>{
        setChangedPics(pictures)
    },[pictures])

    const onClickHandler = (category: string) => {
        setCategoryOnClick(category)
    }

    // const changeIsActiveOnclick = (itemId: number) => {
    //     setChangedPics(changedPics.map(p => {
    //         if (p.id === itemId) {
    //             return {...p, isActive: !p.isActive}
    //         } else {
    //             return {...p, isActive: false}
    //         }
    //     }))
    // }

    const onKey = (e: React.KeyboardEvent, id: number) =>{
        hadler(e.key, id)

    }
    console.log(changedPics)

    return (
        <div className={s.grid}>
            {
                changedPics.map(p => (
                    <div key={p.id}
                         onClick={() => {

                         }}
                         tabIndex={-1}
                         onKeyDown={(e)=>{onKey(e, p.id)}}
                         className={s.gridItem}>
                        <img className={s.img}
                             src={p.img} alt="img"/>
                        <div className={s.inner}>
                            <button onClick={(e) => {
                                onClickHandler(e.currentTarget.innerText)
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
