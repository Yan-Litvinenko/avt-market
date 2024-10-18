import React from 'react';
import styles from './HeaderNavigation.module.scss';
import { HeaderNavigationMobile } from '../headerNavigationMobule/HeaderNavigationMobile';
import { Link } from 'react-router-dom';
import { menuNavigationSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const HeaderNavigation = (): React.JSX.Element => {
    const menu: string[] = useSelector(menuNavigationSelector).menuNavigationElements;

    return (
        <nav className={styles.header_nav}>
            <ul className={styles.header_nav__list}>
                {menu.map((link) => {
                    return (
                        <li className={styles.header_nav__item} key={link}>
                            <Link className={styles.header_nav__link} to={link}>
                                {link}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <HeaderNavigationMobile />
        </nav>
    );
};
