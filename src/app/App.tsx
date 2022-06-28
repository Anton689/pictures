import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Header} from '../components/header/Header';
import {Pictures} from '../components/pictures/Pictures';
import styleContainer from '../common/styles/Container.module.css';
import {Tabs} from '../components/tabs/Tabs';
import {LoadButton} from '../components/loadButton/LoadButton';
import {additionalPictures, pictures} from '../common/dataSet';
import {ImagesType} from '../types/types';
import {START_VALUE} from '../constants/constants';

function App() {

    const [images, setImages] = useState<ImagesType>(pictures)
    const [maxPic, setMaxPics] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(START_VALUE)

    useEffect(()=> {
        if(maxPic){
            setMaxPics(false)
        }
    },[])

    const addImgOnclick = () => {
        if(!maxPic){
            const newState = [...images, ...additionalPictures]
            setMaxPics(true)
            return setImages(newState)
        }
    }

    const setCategory = (categoryName: string) => {
        setCurrentCategory(categoryName)
    }

    return (
        <div className={s.app}>
            <Header/>
            <div className={s.content}>
                <div className={styleContainer.container}>
                    <Tabs setCategoryOnClick={setCategory}
                          category={currentCategory}/>
                    <Pictures setCategoryOnClick={setCategory}
                              pictures={images}
                              category={currentCategory}/>
                    <LoadButton onClick={addImgOnclick}/>
                </div>

            </div>
        </div>
    );
}

export default App;

