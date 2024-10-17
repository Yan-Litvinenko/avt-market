import React from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';

export const Layout = (): React.JSX.Element => {
    return (
        <div className={styles.body_inner}>
            <Header />
            <main>
                <Outlet />
            </main>
            <BurgerMenu />
        </div>
    );
};
