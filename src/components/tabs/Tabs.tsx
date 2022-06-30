import React, {useEffect, useRef, useState} from 'react';
import s from './Tabs.module.css';
import {Select} from '../select/Select';


export const options = [
    {id: '1', name: 'Show All'},
    {id: '2', name: 'Design'},
    {id: '3', name: 'Branding'},
    {id: '4', name: 'Illustration'},
    {id: '5', name: 'Motion'}]

type TabsType = {
    setCategoryOnClick: (category: string) => void
    category: string
}

const WIDTH = 991

export const Tabs = ({setCategoryOnClick, category}: TabsType) => {
    const ref: any = useRef();

    const [isChangedWidth, setIsChangedWidth] = React.useState(false);
    const [active, setActive] = useState(category)

    const resizeHandler = () => {
        const {clientWidth} = ref.current || {}
        if (clientWidth < WIDTH) {
            setIsChangedWidth(true)
        } else {
            setIsChangedWidth(false)
        }
    }

    useEffect(() => {
        setActive(category)
    }, [category])

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [])

    const onClickHandler = (category: string) => {
        setCategoryOnClick(category)
        setActive(category)
    }

    return (
        <div ref={ref} className={s.inner}>
            <div className={s.items}>
                {isChangedWidth
                    ? <Select setCategoryOnClick={setCategoryOnClick}
                              category={category}/>
                    : options.map(o => (
                        <span key={o.id}
                              datatype={o.name}
                              className={active === o.name ? s.active : s.item}
                              onClick={(e) => onClickHandler(e.currentTarget.innerText)}
                        >{o.name}</span>
                    ))
                }
            </div>
        </div>
    );
};