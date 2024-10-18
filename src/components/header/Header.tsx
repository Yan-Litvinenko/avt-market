import React from 'react';
import styles from './Header.module.scss';
import { HeaderContacts } from '../headerContacts/HeaderContacts';
import { HeaderNavigation } from '../headerNavigation/HeaderNavigation';
import { Logo } from '../logo/Logo';
import { menuNavigationSelector } from '../../redux/selectors';
import { useHeaderFixed } from '../../hook/useHeaderFixed';
import { useSelector } from 'react-redux';

export const Header = (): React.JSX.Element => {
    const burgerMenuState: boolean = useSelector(menuNavigationSelector).burgerMenuState;
    const scrollPosition: number = useHeaderFixed();
    const headerIsActive: boolean = scrollPosition !== 0 || burgerMenuState;

    return (
        <header className={`${styles.header} ${headerIsActive ? styles.header_active : ''}`}>
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
