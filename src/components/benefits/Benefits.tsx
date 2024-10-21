import React from 'react';
import styles from './Benefits.module.scss';
import { useDispatch } from 'react-redux';
import { openPromotionModal } from '../../redux/slice/modalPromotionSlice';
import { scrollManager } from '../../helpers/Scroll';
import type { ModalPromotionData } from '../../interfaces/interface';
import type { BenefitsProps } from '../../interfaces/interface';

export const Benefits = ({ benefits }: { benefits: BenefitsProps[] }) => {
    const dispatch = useDispatch();
    const benefitsElementHandler = (payload: Omit<ModalPromotionData, 'img' | 'modalPromotionState'>) => {
        dispatch(openPromotionModal(payload));
        scrollManager.scrollOff();
    };

    return (
        <ul className={styles.benefits}>
            {benefits.map((benefit) => {
                return (
                    <li
                        className={styles.benefits__item}
                        onClick={() =>
                            benefitsElementHandler({ title: benefit.title, description: benefit.description })
                        }
                        key={benefit.title}
                    >
                        {benefit.title}
                    </li>
                );
            })}
        </ul>
    );
};
