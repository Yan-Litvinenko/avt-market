import React from 'react';
import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { menuNavigationSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const BurgerMenu = (): React.JSX.Element => {
    const menu: string[] = useSelector(menuNavigationSelector).menuNavigationElements;

    return (
        <nav className={styles.burger_menu}>
            <ul className={styles.burger_menu__list}>
                {menu.map((link) => {
                    return (
                        <li className={styles.burger_menu__item} key={link}>
                            <Link className={styles.burger_menu__link} to={'/'}>
                                {link}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
