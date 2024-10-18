import React from 'react';
import styles from './ModalPromotion.module.scss';
import { Link } from 'react-router-dom';
import { modalPromotionSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { scrollManager } from '../../helpers/Scroll';
import { closePromotionModal } from '../../redux/slice/modalPromotionSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';

export const ModalPromotion = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const title: string = useSelector(modalPromotionSelector).title;
    const descrption: string = useSelector(modalPromotionSelector).descrption;
    const link: string = useSelector(modalPromotionSelector).link || '';

    const stopPropagationHandler = (event: React.MouseEvent) => event.stopPropagation();
    const closeModalHandler = () => {
        scrollManager.scrollOn();
        dispatch(closePromotionModal());
    };

    return (
        <div className={styles.modal_promotion} onClick={closeModalHandler}>
            <div className={styles.modal_promotion__inner} onClick={stopPropagationHandler}>
                <div className={styles.modal_promotion__cross} onClick={closeModalHandler}></div>

                <h3 className={styles.modal_promotion__title}>{title}</h3>
                <p className={styles.modal_promotion__description}>{descrption}</p>
                {link ? (
                    <Link className={styles.modal_promotion__btn} to={link}>
                        Подробнее
                    </Link>
                ) : null}
            </div>
        </div>
    );
};
