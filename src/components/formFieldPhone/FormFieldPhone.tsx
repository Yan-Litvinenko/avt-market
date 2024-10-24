import React from 'react';
import styles from './FormFieldPhone.module.scss';
import { useNumberPhone } from '../../hook/useNumberPhone';
import type { FormFieldPhoneProps } from '../../interfaces/component.interface';
import type { FieldValues, Path } from 'react-hook-form';

export const FormFieldPhone = <T extends FieldValues>(props: FormFieldPhoneProps<T>): React.JSX.Element => {
    const { id, register } = props;
    const [value, handleKeyDown, setInputRef] = useNumberPhone();

    return (
        <label className={styles.label_phone} htmlFor={id}>
            <input
                {...register('phone' as Path<T>, {
                    pattern: { value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, message: 'Введите номер' },
                })}
                autoComplete="off"
                className={styles.label_phone__input}
                onKeyDown={handleKeyDown}
                placeholder="Телефон"
                type="tel"
                value={value}
                onChange={() => {}}
                ref={(el) => {
                    register('phone' as Path<T>).ref(el);
                    setInputRef(el);
                }}
            />
        </label>
    );
};
