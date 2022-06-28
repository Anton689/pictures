import React, {useEffect, useState} from 'react';
import s from './Pictures.module.css'
import {ImagesType} from '../../types/types';
import {START_VALUE} from '../../constants/constants';

type PicturesType = {
    pictures: ImagesType
    category: string
    setCategoryOnClick: (category: string) => void
}

export const Pictures = ({pictures, category, setCategoryOnClick}: PicturesType) => {
    console.log('rendered')

    const [d, setd] =useState(false)


    let filteredPics = pictures

    if (!category.includes(START_VALUE)) {
        filteredPics = pictures.filter(p => p.category.includes(category))
    }

    const onClickHandler = (category: string) => {
        setCategoryOnClick(category)
    }

    const changeIsActiveOnclick = (itemId: number) =>{
        filteredPics = filteredPics.map(p => {
            if(p.id === itemId){
                return {...p, isActive: !p.isActive}
            }else if(p.isActive){
                return {...p, isActive: false}
            }else{
                return p
            }
        })
        console.log(filteredPics)
    }

    return (
        <div className={s.grid}>
            {
                filteredPics.map(p => (
                    <div key={p.id}
                         onClick={()=>{changeIsActiveOnclick(p.id)}}
                         className={p.isActive ? s.active : s.gridItem}>
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
