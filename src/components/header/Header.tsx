import React from 'react';
import styleContainer from '../../common/styles/Container.module.css';
import s from './Header.module.css';
import Logo from '../../images/logo.svg'
import {Nav} from './nav/Nav';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={styleContainer.container}>
                <div className={s.innerNav}>
                    <div className={s.logo}>
                        <img className={s.logoImg} src={Logo} alt="logo"/>
                        <span className={s.logoName}>
                        Agency
                    </span>
                    </div>
                    <Nav/>
                </div>
                <div className={s.innerText}>
                    <div className={s.heading}>
                        <h1 className={s.text}>Portfolio</h1>
                    </div>
                    <div className={s.description}>
                        <p className={s.descriptionText}>
                            Agency provides a full service range including technical skills,
                            design, business understanding.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

