import React from 'react';
import styles from './InStock.module.scss';
import { Await } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import type { InStockCar } from '../../interfaces/interface';
import type { DataHomeLoader } from '../../interfaces/loader.interface';

export const InStock = (): React.JSX.Element => {
    const { inStock } = useLoaderData() as DataHomeLoader;
    const [visibleMore, setVisibleMore] = React.useState<boolean>(false);
    const handleMoreButton = () => setVisibleMore((prev) => !prev);

    return (
        <section className={styles.in_stock}>
            <div className="container">
                <div className={styles.in_stock__inner}>
                    <h2 className={styles.in_stock__title}>Автомобили в наличии</h2>
                    <ul className={styles.in_stock__list}>
                        <React.Suspense fallback={<h2>Loading...</h2>}>
                            <Await resolve={inStock}>
                                {(resolveInStock) => {
                                    return (resolveInStock as InStockCar[])
                                        .slice(0, visibleMore ? resolveInStock.length : 2)
                                        .map(({ name, count }) => {
                                            return (
                                                <li className={styles.in_stock__item} key={name}>
                                                    <Link className={styles.in_stock__link} to={`cars/${name}`} />
                                                    <h3 className={styles.in_stock__name}>{name}</h3>
                                                    <span className={styles.in_stock__count}>{count}</span>
                                                </li>
                                            );
                                        });
                                }}
                            </Await>
                        </React.Suspense>
                    </ul>

                    <button className={styles.in_stock__btn_more} onClick={handleMoreButton} type="button">
                        Показать больше марок {visibleMore ? <>&#8593;</> : <>&#8595;</>}
                    </button>
                </div>
            </div>
        </section>
    );
};
