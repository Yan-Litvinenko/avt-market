import React from 'react';
import styles from './BankList.module.scss';
import { Await } from 'react-router-dom';
import { DataBanksLoader } from '../../interfaces/loader.interface';
import { ErrorLoading } from '../errorLoading/ErrorLoading';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { useLoaderData } from 'react-router-dom';

export const BanksList = (): React.JSX.Element => {
    const { banksList } = useLoaderData() as { banksList: DataBanksLoader[] };

    return (
        <ul className={styles.banks_list}>
            <React.Suspense fallback={<Loader />}>
                <Await resolve={banksList} errorElement={<ErrorLoading />}>
                    {(resolveBanksList) => {
                        return (resolveBanksList as DataBanksLoader[]).map(({ name, id }) => {
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
                        });
                    }}
                </Await>
            </React.Suspense>
        </ul>
    );
};
