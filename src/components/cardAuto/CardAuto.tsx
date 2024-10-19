import React from 'react';
import styles from './CardAuto.module.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../helpers/formatPrice';
import type { AutoCard } from '../../interfaces/interface';

export const CardAuto = (props: AutoCard): React.JSX.Element => {
    const { inStock, name, year, volume, mileage, power, manualTransmission, fuel, owners, drive, body } = props;
    const { price, priceNoFee } = props;

    return (
        <article className={styles.card_auto}>
            <section className={styles.card_auto__body}>
                <header className={styles.card_auto__header}>
                    <div className={styles.card_auto__in_stock}>{inStock ? 'В наличии' : 'Нет в наличии'}</div>
                    <div></div>
                </header>
                <picture className={styles.card_auto__picture}></picture>
                <h3 className={styles.card_auto__name}>
                    {name} <span>{year}</span>
                </h3>
                <p className={styles.card_auto__tags}>
                    <span>{volume}л.</span>&nbsp;
                    <span>{mileage}км.</span>&nbsp;
                    <span>{power}л.с.</span>&nbsp;
                    <span>{manualTransmission}</span>&nbsp;
                    <span>{fuel}</span>&nbsp;
                    <span>{owners} владелец</span>&nbsp;
                    <span>{drive}</span>&nbsp;
                    <span>{body}л.</span>&nbsp;
                </p>
            </section>
            <section className={styles.card_auto__footer}>
                <div className={styles.card_auto__price_box}>
                    <span className={styles.card_auto__price}>{formatPrice(price)} &#8381;</span>
                    <span className={styles.card_auto__price_no_fee}>{priceNoFee}&#8381;/мес. без взноса</span>
                </div>

                <button className={styles.card_auto__buy} type="button">
                    Купить в кредит
                </button>
            </section>
            <Link className={styles.card_auto__link} to={'/'} />
        </article>
    );
};
