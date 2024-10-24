import React from 'react';
import styles from './FormFieldSelect.module.scss';
import type { FieldValues, Path, PathValue } from 'react-hook-form';
import type { FormFieldSelectProps } from '../../interfaces/component.interface';

export const FormFieldSelect = <T extends FieldValues>(props: FormFieldSelectProps<T>): React.JSX.Element => {
    const { placeholder, items, setFormValue, fieldName, isError, register } = props;
    const list = React.useRef<null | HTMLUListElement>(null);
    const [selectValue, setSelectValue] = React.useState<string>(placeholder);
    const [state, setState] = React.useState<boolean>(false);

    const open = () => {
        setState(true);
    };

    const select = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: PathValue<T, Path<T>>) => {
        event.stopPropagation();
        setState(false);
        setSelectValue(value);
        setFormValue(fieldName, value);
    };

    return (
        <div className={styles.form_field_select} onClick={open}>
            <input
                {...register}
                className={`${styles.form_field_select__input} ${isError ? 'field_error' : ''}`}
                autoComplete="off"
                type="text"
                value={selectValue === placeholder ? '' : selectValue}
                placeholder={placeholder}
                onChange={() => {}}
            />

            {state ? (
                <ul className={styles.form_field_select__list} ref={list}>
                    {items.map((item) => {
                        return (
                            <li
                                className={styles.form_field_select__item}
                                key={item}
                                onClick={(event) => select(event, item as PathValue<T, Path<T>>)}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};
