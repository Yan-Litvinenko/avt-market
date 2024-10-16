import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './Header.module.scss';
import { HeaderContacts } from '../headerContacts/HeaderContacts';
import { HeaderNavigation } from '../headerNavigation/HeaderNavigation';
import { Link } from 'react-router-dom';

export const Header = (): React.JSX.Element => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner} container`}>
                <div className={styles.logo}>
                    <Link className={styles.logo__link} to={'/'}>
                        <img className={styles.logo__img} src={logo} alt="logo" />
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
