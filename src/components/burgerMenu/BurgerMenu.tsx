import React from 'react';
import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { menuNavigationSelector } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { triggerStateBurgerMenu } from '../../redux/slice/menuNavigationSlice';
import type { MenuElement } from '../../interfaces/interface';
import type { AppDispatch } from '../../redux/store';

export const BurgerMenu = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const handleFollowLink = () => dispatch(triggerStateBurgerMenu());
    const menu: MenuElement[] = useSelector(menuNavigationSelector).menuNavigationElements;
    const menuState: boolean = useSelector(menuNavigationSelector).burgerMenuState;

    return (
        <nav className={`${styles.burger_menu} ${menuState ? styles.burger_menu_active : ''}`}>
            <ul className={styles.burger_menu__list}>
                {menu.map(({ name, link }) => {
                    return (
                        <li className={styles.burger_menu__item} key={name} onClick={handleFollowLink}>
                            <Link className={styles.burger_menu__link} to={link}>
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
