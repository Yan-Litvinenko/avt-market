import React from 'react';
import styles from './BankList.module.scss';
import { Link } from 'react-router-dom';

const banksList = Array.from({ length: 27 }).fill('Название банка');

export const BanksList = (): React.JSX.Element => {
    return (
        <ul className={styles.banks_list}>
            {(banksList as string[]).map((bank, index) => {
                return (
                    <li className={styles.banks_list__item} key={index}>
                        {/* <img src="" alt="Тут будет картинка банка" /> */}
                        {bank}
                        <div className={styles.banks_list__helper}>
                            <p>Отправить заявку</p>
                            <p>в {bank}</p>
                        </div>
                        <Link className={styles.banks_list__link} to={'/'} />
                    </li>
                );
            })}
        </ul>
    );
};
