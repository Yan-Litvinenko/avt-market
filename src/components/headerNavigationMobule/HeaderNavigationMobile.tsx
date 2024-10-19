import React from 'react';
import styles from './HeaderNavigationMobile.module.scss';
import { Link } from 'react-router-dom';
import { Heart } from '../heart/Heart';
import { menuNavigationSelector } from '../../redux/selectors';
import { Phone } from '../phone/Phone';
import { triggerStateBurgerMenu } from '../../redux/slice/menuNavigationSlice';
import { favoritesSelector } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';

export const HeaderNavigationMobile = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const burgerHandle = () => dispatch(triggerStateBurgerMenu());
    const menuState: boolean = useSelector(menuNavigationSelector).burgerMenuState;
    const favoritesCount: number = useSelector(favoritesSelector).favoritesCount;

    return (
        <article className={styles.header_navigation_mobile}>
            <div className={styles.header_navigation_mobile__heart}>
                <Link className={styles.heart_link} to={'/'}>
                    <Heart />
                    {favoritesCount}
                </Link>
            </div>
            <div className={styles.header_navigation_mobile__phone}>
                <Phone />
            </div>
            <button
                className={`${styles.hamburger} ${menuState ? styles.hamburger_active : ''}`}
                type="button"
                onClick={burgerHandle}
            >
                <span className={styles.hamburger__element}></span>
                <span className={styles.hamburger__element}></span>
                <span className={styles.hamburger__element}></span>
            </button>
        </article>
    );
};
