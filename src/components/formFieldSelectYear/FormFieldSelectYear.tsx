import React from 'react';
import styles from './FormFieldSelectYear.module.scss';
import type { FormFieldSelectYearProps } from '../../interfaces/component.interface';

export const FormFieldSelectYear = (props: FormFieldSelectYearProps): React.JSX.Element => {
    const [state, setState] = React.useState<boolean>(false);
    const { textContent, years } = props;
    const handler = (): void => setState((prev) => !prev);

    return (
        <div className={styles.form_field_select_year} onClick={handler}>
            <div className={styles.form_field_select_year__input}>{textContent}</div>

            {state ? (
                <ul className={styles.form_field_select_year__list}>
                    {years.map((year) => {
                        return (
                            <li className={styles.form_field_select_year__item} key={year}>
                                {year}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};
