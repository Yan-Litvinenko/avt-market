import React from 'react';
import styles from './BankList.module.scss';
import { banksListSelector } from '../../redux/selectors';
import { ErrorLoading } from '../errorLoading/ErrorLoading';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { useSelector } from 'react-redux';
import type { BanksListItem } from '../../interfaces/component.interface';

export const BanksList = (): React.JSX.Element => {
    const banksList: BanksListItem[] = useSelector(banksListSelector).banksList;
    const isLoad: boolean = useSelector(banksListSelector).stateLoad.isLoad;
    const error: boolean = useSelector(banksListSelector).stateLoad.error;

    if (error) {
        return <ErrorLoading />;
    }

    if (isLoad) {
        return <Loader />;
    }

    return (
        <ul className={styles.banks_list}>
            {banksList.map(({ name, id }) => {
                return (
                    <li className={styles.banks_list__item} key={id}>
                        {/* <img src="" alt="Тут будет картинка банка" /> */}
                        {name}
                        <div className={styles.banks_list__helper}>
                            <p>Отправить заявку</p>
                            <p>в {name}</p>
                        </div>
                        <Link className={styles.banks_list__link} to={'/'} />
                    </li>
                );
            })}
            ;
        </ul>
    );
};
