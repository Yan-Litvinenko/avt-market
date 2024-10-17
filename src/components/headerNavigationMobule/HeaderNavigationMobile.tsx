import React from 'react';
import styles from './HeaderNavigationMobile.module.scss';
import { Heart } from '../heart/Heart';
import { Phone } from '../phone/Phone';

export const HeaderNavigationMobile = (): React.JSX.Element => {
    return (
        <article className={styles.header_navigation_mobile}>
            <div className={styles.header_navigation_mobile__heart}>
                <Heart />
            </div>
            <div className={styles.header_navigation_mobile__phone}>
                <Phone />
            </div>
            <button className={styles.hamburger} type="button">
                <span className={styles.hamburger__element}></span>
                <span className={styles.hamburger__element}></span>
                <span className={styles.hamburger__element}></span>
            </button>
        </article>
    );
};
