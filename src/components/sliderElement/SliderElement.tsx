import React from 'react';
import styles from './SliderElement.module.scss';
import { Link } from 'react-router-dom';
import type { SliderElementProps } from '../../interfaces/components.interface';

export const SliderElement = (props: SliderElementProps): React.JSX.Element => {
    const { imgPath, imgPath2x, title, descriptionStroke, linkPath } = props;

    return (
        <div className={styles.slide}>
            <div className={styles.slide__insert}>
                <h2 className={styles.slide__title}>{title}</h2>
                <p className={styles.slide__description}>
                    {descriptionStroke.map((stroke, index, array) => {
                        return (
                            <React.Fragment key={index}>
                                {stroke} {index !== array.length - 1 ? <br /> : ''}
                            </React.Fragment>
                        );
                    })}
                </p>
                <Link className={styles.slide__link} to={linkPath} />
            </div>

            <picture className={styles.slide__picture}>
                <source srcSet={imgPath2x} type="image/webp" />
                <img className={styles.slide__img} src={imgPath} alt="car slider image" />
            </picture>
        </div>
    );
};
