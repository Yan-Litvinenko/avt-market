import React from 'react';
import styles from './Loader.module.scss';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = (): React.JSX.Element => {
    return (
        <div className={styles.loader_wrapper}>
            <RotatingLines
                visible={true}
                width="96"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </div>
    );
};
