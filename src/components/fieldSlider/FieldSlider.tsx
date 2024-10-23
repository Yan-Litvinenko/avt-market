import React from 'react';
import styles from './FieldSlider.module.scss';
import type { FieldSliderProps } from '../../interfaces/component.interface';

export const FieldSlider = (props: FieldSliderProps): React.JSX.Element => {
    const { titleText, unitOfMeasurement, initValue, steps, endpoints, ticksLeft } = props;
    const { ticksContentWidth, register } = props;
    const [inputValue, setInputValue] = React.useState(steps.indexOf(initValue));
    const max: number = steps.length - 1;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = Number(e.target.value);
        setInputValue(index);
    };

    return (
        <label className={styles.field_slider}>
            <h3 className={styles.field_slider__title}>
                <span>{titleText}</span>
                <span>
                    {steps[inputValue]} {unitOfMeasurement}
                </span>
            </h3>

            <div className={styles.field_slider__box}>
                <input
                    {...register}
                    className={styles.field_slider__input}
                    max={max}
                    min="0"
                    step="1"
                    type="range"
                    value={inputValue}
                    onChange={handleChange}
                />
                <div
                    className={styles.field_slider__input_background}
                    style={{ width: `${(inputValue / max) * 100}%` }}
                ></div>
            </div>

            <div className={styles.field_slider__ticks} style={{ width: ticksContentWidth, left: ticksLeft }}>
                {endpoints.map((endpoint) => {
                    return <span key={endpoint}>{endpoint}</span>;
                })}
            </div>
        </label>
    );
};
