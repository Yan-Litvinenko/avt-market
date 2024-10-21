import React from 'react';
import styles from './Cross.module.scss';
import type { CrossProps } from '../../interfaces/component.interface';

export const Cross = (props: CrossProps): React.JSX.Element => {
    const { handler, className } = props;

    return <div className={`${styles.cross} ${className}`} onClick={handler}></div>;
};
