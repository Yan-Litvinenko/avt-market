import React from 'react';
import styles from './Header.module.scss';
import { HeaderContacts } from '../headerContacts/HeaderContacts';
import { HeaderNavigation } from '../headerNavigation/HeaderNavigation';
import { Logo } from '../logo/Logo';
import { menuNavigationSelector } from '../../redux/selectors';
import { useHeaderFixed } from '../../hook/useHeaderFixed';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = (): React.JSX.Element => {
    const location = useLocation();
    const burgerMenuState: boolean = useSelector(menuNavigationSelector).burgerMenuState;
    const scrollPosition: number = useHeaderFixed();

    const headerIsActive = (): boolean => {
        if (location.pathname !== '/') return true;
        return scrollPosition !== 0 || burgerMenuState;
    };

    return (
        <header className={`${styles.header} ${headerIsActive() ? styles.header_active : ''}`}>
            <div className={`${styles.header__inner} container`}>
                <div className={styles.logo}>
                    <Logo className={styles.logo__img} />
                </div>
                <div className={styles.header__info}>
                    <HeaderContacts />
                    <HeaderNavigation />
                </div>
            </div>
        </header>
    );
};
