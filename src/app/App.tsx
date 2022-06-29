import React, {useState} from 'react';
import s from './App.module.css';
import {Header} from '../components/header/Header';
import {Pictures} from '../components/pictures/Pictures';
import styleContainer from '../common/styles/Container.module.css';
import {Tabs} from '../components/tabs/Tabs';
import {LoadButton} from '../components/loadButton/LoadButton';
import {pictures} from '../common/dataSet';
import {ImagesType} from '../types/types';
import {DELETE, START_VALUE} from '../constants/constants';

export function App() {

    const [images, setImages] = useState<ImagesType>(pictures)
    const [currentCategory, setCurrentCategory] = useState(START_VALUE)

    let filteredPics = images

    if (currentCategory !== START_VALUE) {
        filteredPics = images.filter(({category}) => category === currentCategory)
    }

    const addImgOnclick = () => {
        const newState = [...images,
            ...pictures.slice(-9)
                .map(m => ({...m, id: m.id + 9, name: m.name + '2'}))]
        setImages(newState)
    }

    const setCategory = (categoryName: string) => {
        setCurrentCategory(categoryName)
    }

    const deleteItem = (key: string, itemId: number, isActive: boolean) => {
        if (key === DELETE && isActive) {
            let filteredImages = images.filter(({id}) => id !== itemId)
            setImages(filteredImages)
        }
    }

    const isDisableButton = images.length === 18

    return (
        <div className={s.app}>
            <Header/>
            <div className={s.content}>
                <div className={styleContainer.container}>
                    <Tabs setCategoryOnClick={setCategory}
                          category={currentCategory}/>

                    <Pictures setCategoryOnClick={setCategory}
                              pictures={filteredPics}
                              deleteItem={deleteItem}/>

                    <LoadButton onClick={addImgOnclick}
                                disable={isDisableButton}/>
                </div>
            </div>
        </div>
    );
}

