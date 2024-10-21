import React from 'react';
import styles from './FieldSlider.module.scss';
import type { FieldSliderProps } from '../../interfaces/component.interface';

export const FieldDownPayment = (props: FieldSliderProps): React.JSX.Element => {
    const { titleText, value, unitOfMeasurement, step, endpoints, ticksContentWidth, tickItemWidth } = props;
    const [inputValue, setInputValue] = React.useState<number>(0);
    const max: number = (endpoints.length - 1) * 10;

    return (
        <label className={styles.field_slider}>
            <h3 className={styles.field_slider__title}>
                <span>{titleText}</span>
                <span>
                    {value} {unitOfMeasurement}
                </span>
            </h3>

            <div className={styles.field_slider__box}>
                <input
                    className={styles.field_slider__input}
                    max={max}
                    min="0"
                    step={step}
                    type="range"
                    value={inputValue}
                    onChange={(event) => setInputValue(Number(event.target.value))}
                />
                <div
                    className={styles.field_slider__input_background}
                    style={{ width: `${(inputValue / max) * 100}%` }}
                ></div>
            </div>

            <div className={styles.field_slider__ticks} style={{ width: `${ticksContentWidth}%` }}>
                {endpoints.map((endpoint) => {
                    return (
                        <span key={endpoint} style={{ width: `${tickItemWidth}px` }}>
                            {endpoint}
                        </span>
                    );
                })}
            </div>
        </label>
    );
};
