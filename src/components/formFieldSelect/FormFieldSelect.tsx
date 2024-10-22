import React from 'react';
import styles from './FormFieldSelect.module.scss';
import type { FormFieldSelectProps } from '../../interfaces/component.interface';

export const FormFieldSelect = (props: FormFieldSelectProps): React.JSX.Element => {
    const [state, setState] = React.useState<boolean>(false);
    const { textContent, items } = props;
    const handler = (): void => setState((prev) => !prev);

    return (
        <div className={styles.form_field_select} onClick={handler}>
            <div className={styles.form_field_select__input}>{textContent}</div>

            {state ? (
                <ul className={styles.form_field_select__list}>
                    {items.map((item) => {
                        return (
                            <li className={styles.form_field_select__item} key={item}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};
