import React from 'react';
import styles from './Contacts.module.scss';

export const Contacts = (): React.JSX.Element => {
    return (
        <div className={styles.contacts}>
            <div className="container">
                <div className={styles.contacts__inner}>
                    <h1 className={styles.contacts__title}>Контакты</h1>
                    <div className={styles.contacts__content}>
                        <ul className={styles.contacts__list}>
                            <li className={styles.contacts__item}>
                                <h3 className={styles.contacts__item_title}>Телефон автоцентра:</h3>
                                <a className={styles.contacts__item_text} href="tel:+74992887610">
                                    +7 (499) 288-76-10
                                </a>
                            </li>
                            <li className={styles.contacts__item_title}>
                                <h3 className={styles.contacts__item}>Режим работы:</h3>
                                <p className={styles.contacts__item_text}>с 09:00 до 21:00 ежедневно</p>
                            </li>
                            <li className={styles.contacts__item_title}>
                                <h3 className={styles.contacts__item}>Адрес автоцентра:</h3>
                                <p className={styles.contacts__item_text}>
                                    г. Москва, Варшавское ш., д. 132а к. 1, помещ. 1к/10
                                </p>
                            </li>
                        </ul>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.1557580702656!2d37.605988891428176!3d55.616705432943846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab2f56da35fd1%3A0xf0e37a552a4d166f!2z0JLQsNGA0YjQsNCy0YHQutC-0LUg0YguLCAxMzLQkCDRgdGC0YDQvtC10L3QuNC1IDEsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMTc1MTk!5e0!3m2!1sru!2sby!4v1729363949868!5m2!1sru!2sby"
                            width="600"
                            height="360"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
