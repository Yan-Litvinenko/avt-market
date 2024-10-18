import React from 'react';
import creditImage from '../../assets/images/credit_promotion.svg';
import firstAutoImage from '../../assets/images/first_auto_promotion.svg';
import installmentImage from '../../assets/images/installment_promotion.svg';
import prizeImage from '../../assets/images/prize_promotion.svg';
import roadImage from '../../assets/images/road_promotion.svg';
import tradeImage from '../../assets/images/trade_in_promotion.svg';
import styles from './Promotion.module.scss';
// import { Link } from 'react-router-dom';
import { scrollManager } from '../../helpers/Scroll';
import { useDispatch } from 'react-redux';
import { openPromotionModal } from '../../redux/slice/modalPromotionSlice';
import type { AppDispatch } from '../../redux/store';
import type { ModalPromotionData } from '../../interfaces/interface';

const promotionData: ModalPromotionData[] = [
    {
        title: 'Автокредит',
        descrption:
            'При покупке автомобиля с пробегом в кредит мы предлагаем нашим покупателям скидку до 300 000 ₽. Мы сотрудничаем только с проверенными и крупнейшими банками России.',
        link: 'credit',
        img: creditImage,
    },
    {
        title: 'Трейд-Ин',
        descrption:
            'По нашей программе Trade-In можно обменять свой старый автомобиль с выгодой до 300 000 ₽. Оценка автомобиля и сопровождение по сделке - абсолютно бесплатны.',
        link: 'exchange',
        img: tradeImage,
    },
    {
        title: 'Рассрочка',
        descrption:
            'Рассрочка в АЦ "YouAuto" - выгодный и удобный способ приобретения автомобиля с пробегом. Срок погашения до 3 лет без первого взноса и переплат. Если же выплата за 3 года не возможна, лучшее решение - автокредит со скидкой до 300 000₽.',
        link: 'installment',
        img: installmentImage,
    },
    {
        title: 'Подарок на выбор',
        descrption:
            'При покупке автомобиля в кредит мы предлагаем покупателям подарок на выбор - КАСКО, комплект второй резины или дополнительный аксессуар.',
        img: prizeImage,
    },
    {
        title: 'Первый автомобиль',
        descrption:
            'Программа "Первый автомобиль" создана с целью помочь водителям-новичкам приобрести свой первый автомобиль. Программа дарит возможность льготного автокредитования. Водители, участвующие в программе, получают 20% скидку на автомобиль, но только при условии взятия автомобиля в кредит. Это позволяет поддерживать спрос на покупку отечественных автомобилей и авто, собираемых на территории Российской Федерации. Подобная программа была разработана еще в 2009 году и до сих пор успешно функционирует.',
        img: firstAutoImage,
    },
    {
        title: 'Оплатим дорогу',
        descrption: 'Оплатим все денежные расходы на дорогу покупателям из другого региона.',
        img: roadImage,
    },
];

export const Promotion = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const promotionElementHandler = (payload: Omit<ModalPromotionData, 'img' | 'modalPromotionState'>) => {
        dispatch(openPromotionModal(payload));
        scrollManager.scrollOff();
    };

    return (
        <section className={styles.promotion}>
            <div className="container">
                <ul className={styles.promotion__list}>
                    {promotionData.map(({ title, descrption, link, img }) => {
                        return (
                            <li
                                className={styles.promotion__item}
                                onClick={() => promotionElementHandler({ title, descrption, link })}
                            >
                                <h3 className={styles.promotion__title}>{title}</h3>
                                <img className={styles.promotion__img} src={img} alt={title} />
                                {/* {link ? <Link className={styles.promotion__link} to={link} /> : null} */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
