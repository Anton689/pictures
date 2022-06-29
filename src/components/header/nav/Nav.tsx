import React from 'react';
import s from './Nav.module.css';

export const Nav = () => {
    return (
        <>
            <nav className={s.links}>
                <ul className={s.linksList}>
                    <li className={s.item}>
                        <a className={s.link}
                           href="src/components/header/nav/Nav#">About</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link}
                           href="src/components/header/nav/Nav#">Services</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link}
                           href="src/components/header/nav/Nav#">Pricing</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link}
                           href="src/components/header/nav/Nav#">Blog</a>
                    </li>
                </ul>
            </nav>
            <div>
                <button className={s.button}>
                    Contact
                </button>
            </div>
        </>
    );
};