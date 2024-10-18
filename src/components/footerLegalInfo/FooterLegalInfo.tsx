import React from 'react';
import styles from './FooterLegalInformation.module.scss';

export const FooterLegalInfo = (): React.JSX.Element => {
    return (
        <article className={styles.footer_legal_info}>
            <ul className={styles.footer_legal_info__list}>
                <li className={styles.footer_legal_info__item}>
                    <h3>Юридическое лицо:</h3>
                    <p>ООО "МАГНАТ АВТО"</p>
                </li>
                <li className={styles.footer_legal_info__item}>
                    <h3>ИНН / КПП / ОГРН:</h3>
                    <p>9726053873 / 772601001 / 1237700629583</p>
                </li>
                <li className={styles.footer_legal_info__item}>
                    <h3>Юридический адрес:</h3>
                    <p>117519, г. Москва, Варшавское ш., д. 132а к. 1, помещ. 1к/10</p>
                </li>
                <li className={styles.footer_legal_info__item}>
                    <h3>Физический адрес:</h3>
                    <p>117519, г. Москва, Варшавское ш., д. 132а к. 1, помещ. 1к/10</p>
                </li>
            </ul>
        </article>
    );
};
