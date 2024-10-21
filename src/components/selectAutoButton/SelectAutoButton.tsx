import React from 'react';
import styles from './SelectAutoButton.module.scss';

export const SelectAutoButton = () => {
    return (
        <button className={styles.select_auto_button} type="button">
            Выбрать автомобиль
        </button>
    );
};
