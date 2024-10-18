import React from 'react';
import styles from './Layout.module.scss';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = (): React.JSX.Element => {
    return (
        <div className={styles.body_inner}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BurgerMenu />
        </div>
    );
};
