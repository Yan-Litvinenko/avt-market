import React from 'react';
import styles from './SelectAutoButton.module.scss';
import type { SelectAutoButtonProps } from '../../interfaces/component.interface';

export const SelectAutoButton = ({ register, isError }: SelectAutoButtonProps): React.JSX.Element => {
    return (
        <input
            {...register}
            className={`${styles.select_auto_button} ${isError ? 'field_error' : ''}`}
            type="button"
            value={'Выбрать автомобиль'}
        />
    );
};
