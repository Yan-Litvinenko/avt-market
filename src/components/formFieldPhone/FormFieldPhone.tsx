import React from 'react';
import styles from './FormFieldPhone.module.scss';
import { useNumberPhone } from '../../hook/useNumberPhone';
import type { FormFieldPhoneProps } from '../../interfaces/component.interface';

export const FormFieldPhone = (props: FormFieldPhoneProps): React.JSX.Element => {
    const { id } = props;
    const phoneInput = React.useRef<HTMLInputElement | null>(null);
    const [value, handleKeyDown] = useNumberPhone({ phoneInput });

    return (
        <label className={styles.label_phone} htmlFor={id}>
            <input
                ref={phoneInput}
                className={styles.label_phone__input}
                onKeyDown={handleKeyDown}
                onChange={() => {}}
                placeholder="Телефон"
                type="tel"
                value={value}
            />
        </label>
    );
};
