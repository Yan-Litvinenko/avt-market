import React from 'react';
import styles from './LatestArrivals.module.scss';
import { LatestArrivalsSlider } from '../LatestArrivalsSlider/LatestArrivalsSlider';
import { Link } from 'react-router-dom';

export const LatestArrivals = (): React.JSX.Element => {
    return (
        <section className={styles.latest_arrivals}>
            <div className="container">
                <div className={styles.latest_arrivals__inner}>
                    <div>
                        <h2 className={styles.latest_arrivals__title}>Последние поступления</h2>
                        <LatestArrivalsSlider />
                    </div>
                    <Link className={styles.latest_arrivals__link} to={'/'}>
                        Все автомобили &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};
