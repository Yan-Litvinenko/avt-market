import React from 'react';
import styles from './HeaderContacts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { mediaQuerySelector } from '../../redux/selectors';
import { callbackModalTrigger } from '../../redux/slice/callbackModalSlice';
import { scrollManager } from '../../helpers/Scroll';

export const HeaderContacts = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const isMedium: boolean = useSelector(mediaQuerySelector).isMedium;
    const phoneHandler = (): void => {
        if (isMedium) return;
        dispatch(callbackModalTrigger());
        scrollManager.scrollOff();
    };

    return (
        <ul className={styles.header_contacts}>
            <li className={styles.header_contacts__item}>с 09:00 до 21:00 ежедневно</li>
            <li className={styles.header_contacts__item}>г. Москва, Варшавское ш., д. 132а к. 1, помещ. 1к/10</li>
            <li className={styles.header_contacts__item} onClick={phoneHandler}>
                {isMedium ? <a href="tel: +74992887610">+7 (499) 288-76-10</a> : '+7 (499) 288-76-10'}
            </li>
        </ul>
    );
};
