import React from 'react';
import styles from './Checkbox.module.scss';
import { CheckMarker } from '../checkMarker/CheckMarker';
import type { CheckboxProps } from '../../interfaces/component.interface';

export const Checkbox = (props: CheckboxProps): React.JSX.Element => {
    const { id, textContent, register } = props;

    return (
        <label className={styles.checkbox_label} htmlFor={id}>
            <input className={styles.checkbox_label__checkbox} {...register} type="checkbox" id={id} />
            <div className={styles.checkbox_label__checkbox_custom}>
                <CheckMarker />
            </div>
            <p className={styles.checkbox_label__text}>{textContent}</p>
        </label>
    );
};
