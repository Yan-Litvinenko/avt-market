import React from 'react';
import styles from './FooterContacts.module.scss';
import { Logo } from '../logo/Logo';

export const FooterContacts = (): React.JSX.Element => {
    return (
        <article className={styles.footer_contacts}>
            <ul className={styles.footer_contacts__list}>
                <li className={styles.footer_contacts__item}>
                    <Logo className={styles.footer_contacts__logo} />
                </li>
                <li className={styles.footer_contacts__item}>
                    <a href="tel: +74992887610">+7 (499) 288-76-10</a>
                </li>
                <li className={styles.footer_contacts__item}>г. Москва, Варшавское ш., д. 132а к. 1, помещ. 1к/10</li>
                <li className={styles.footer_contacts__item}>с 09:00 до 21:00 ежедневно</li>
            </ul>
        </article>
    );
};
