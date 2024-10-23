import React from 'react';
import styles from './FormFieldPhone.module.scss';
import { useNumberPhone } from '../../hook/useNumberPhone';
import type { FormFieldPhoneProps } from '../../interfaces/component.interface';

export const FormFieldPhone = (props: FormFieldPhoneProps): React.JSX.Element => {
    const { id, register } = props;
    const [value, handleKeyDown, setInputRef] = useNumberPhone();

    return (
        <label className={styles.label_phone} htmlFor={id}>
            <input
                {...register('phone', { pattern: { value: /^\+7 (d{3}) d{3}-d{2}-d{2}$/, message: 'Введите номер' } })}
                className={styles.label_phone__input}
                onKeyDown={handleKeyDown}
                placeholder="Телефон"
                type="tel"
                value={value}
                onChange={() => {}}
                ref={(el) => {
                    register('phone').ref(el);
                    setInputRef(el);
                }}
            />
        </label>
    );
};
