import React, {useState} from 'react';
import s from './App.module.css';
import {Header} from '../components/header/Header';
import {Pictures} from '../components/pictures/Pictures';
import styleContainer from '../common/styles/Container.module.css';
import {Tabs} from '../components/tabs/Tabs';
import {LoadButton} from '../components/loadButton/LoadButton';
import {pictures} from '../common/dataSet';
import {ImagesType} from '../types/types';
import {START_VALUE} from '../constants/constants';

export function App() {

    const [images, setImages] = useState<ImagesType>(pictures)
    const [currentCategory, setCurrentCategory] = useState(START_VALUE)

    const addImgOnclick = () => {
        const newState = [...images,
            ...images.slice(-9)
                .map(m => ({...m, id: m.id + 9, name: m.name + '2'}))]
        setImages(newState)
    }

    const setCategory = (categoryName: string) => {
        setCurrentCategory(categoryName)
    }

    const hadler = (key: string, id: number)=> {
        if(key === 'e'){
            setImages(images.filter(f => f.id !== id))
        }
    }

    let filteredPics = images

    if (currentCategory !== START_VALUE) {
        filteredPics = images.filter(p => p.category === currentCategory)
    }

    return (
        <div className={s.app}>
            <Header/>
            <div className={s.content}>
                <div className={styleContainer.container}>
                    <Tabs setCategoryOnClick={setCategory}
                          category={currentCategory}/>
                    <Pictures setCategoryOnClick={setCategory}
                              pictures={filteredPics}
                              hadler={hadler}/>
                    <LoadButton onClick={addImgOnclick}/>
                </div>

            </div>
        </div>
    );
}

