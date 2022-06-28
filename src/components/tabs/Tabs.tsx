import React, {useEffect, useState} from 'react';
import s from './Tabs.module.css';


const options = [
    {id: '1', name: 'Show All'},
    {id: '2', name: 'Design'},
    {id: '3', name: 'Branding'},
    {id: '4', name: 'Illustration'},
    {id: '5', name: 'Motion'}]

type TabsType = {
    setCategoryOnClick: (category: string) => void
    category: string
}

export const Tabs = ({setCategoryOnClick, category}: TabsType) => {

    const [active, setActive] = useState(category)

    useEffect(() => {
        setActive(category)
    }, [category])

    const onClickHandler = (category: string) => {
        setCategoryOnClick(category)
        setActive(category)
    }

    return (
        <div className={s.inner}>
            <div className={s.items}>
                {
                    options.map(o => (
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