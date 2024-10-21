import React from 'react';
import styles from './Layout.module.scss';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { ModalBenefit } from '../modalBenefit/ModalBenefit';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { modalPromotionSelector } from '../../redux/selectors';

export const Layout = (): React.JSX.Element => {
    const modalPromotionState: boolean = useSelector(modalPromotionSelector).modalPromotionState;

    return (
        <div className={styles.body_inner}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BurgerMenu />
            {modalPromotionState ? <ModalBenefit /> : null}
        </div>
    );
};
