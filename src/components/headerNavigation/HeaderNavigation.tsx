import React from 'react';
import styles from './HeaderNavigation.module.scss';
import { Link } from 'react-router-dom';
import { HeaderNavigationMobile } from '../headerNavigationMobule/HeaderNavigationMobile';

export const HeaderNavigation = (): React.JSX.Element => {
    return (
        <nav className={styles.header_nav}>
            <ul className={styles.header_nav__list}>
                {['В наличии', ' Автокредит', 'Рассрочка', 'Выкуп', 'Trade-In', 'Банки', 'Контакты', 'О компании'].map(
                    (link) => {
                        return (
                            <li className={styles.header_nav__item} key={link}>
                                <Link className={styles.header_nav__link} to={'/'}>
                                    {link}
                                </Link>
                            </li>
                        );
                    },
                )}
            </ul>
            <HeaderNavigationMobile />
        </nav>
    );
};
