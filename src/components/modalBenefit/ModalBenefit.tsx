import React from 'react';
import styles from './ModalBenefit.module.scss';
import { Link } from 'react-router-dom';
import { modalPromotionSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { scrollManager } from '../../helpers/Scroll';
import { closePromotionModal } from '../../redux/slice/modalPromotionSlice';
import { useDispatch } from 'react-redux';
import { Cross } from '../cross/Cross';
import type { AppDispatch } from '../../redux/store';

export const ModalBenefit = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const title: string = useSelector(modalPromotionSelector).title;
    const description: string = useSelector(modalPromotionSelector).description;
    const link: string = useSelector(modalPromotionSelector).link || '';

    const stopPropagationHandler = (event: React.MouseEvent) => event.stopPropagation();
    const closeModalHandler = () => {
        scrollManager.scrollOn();
        dispatch(closePromotionModal());
    };

    return (
        <div className={styles.modal_benefit} onClick={closeModalHandler}>
            <div className={styles.modal_benefit__inner} onClick={stopPropagationHandler}>
                <Cross handler={closeModalHandler} className="" />

                <h3 className={styles.modal_benefit__title}>{title}</h3>
                <p className={styles.modal_benefit__description}>{description}</p>
                {link ? (
                    <Link className={styles.modal_benefit__btn} to={link}>
                        Подробнее
                    </Link>
                ) : null}
            </div>
        </div>
    );
};
