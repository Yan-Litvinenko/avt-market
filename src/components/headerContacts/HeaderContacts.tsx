import React from 'react';
import styles from './HeaderContacts.module.scss';

export const HeaderContacts = (): React.JSX.Element => {
    return (
        <ul className={styles.header_contacts}>
            <li className={styles.header_contacts__item}>с 09:00 до 21:00 ежедневно</li>
            <li className={styles.header_contacts__item}>г. Москва, Варшавское ш., д. 132а к. 1, помещ. 1к/10</li>
            <li className={styles.header_contacts__item}>
                <a href="tel: +7 (499) 288-76-10">+7 (499) 288-76-10</a>
            </li>
        </ul>
    );
};
