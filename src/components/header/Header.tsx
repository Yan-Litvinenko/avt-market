import React from 'react';
import styles from './Header.module.scss';
import { Logo } from '../logo/Logo';
import { HeaderContacts } from '../headerContacts/HeaderContacts';
import { useHeaderFixed } from '../../hooks/useHeaderFixed';
import { HeaderNavigation } from '../headerNavigation/HeaderNavigation';
import { Link } from 'react-router-dom';

export const Header = (): React.JSX.Element => {
    const scrollPosition = useHeaderFixed();

    return (
        <header className={`${styles.header} ${scrollPosition !== 0 ? styles.header_active : ''}`}>
            <div className={`${styles.header__inner} container`}>
                <div className={styles.logo}>
                    <Link className={styles.logo__link} to={'/'}>
                        <Logo className={styles.logo__img} />
                    </Link>
                </div>
                <div className={styles.header__info}>
                    <HeaderContacts />
                    <HeaderNavigation />
                </div>
            </div>
        </header>
    );
};
