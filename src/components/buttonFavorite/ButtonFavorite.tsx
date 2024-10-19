import React from 'react';
import styles from './ButtonFavorite.module.scss';
import { useDispatch } from 'react-redux';
import { Heart } from '../heart/Heart';
import { addToFavorites, removeFromFavorites } from '../../redux/slice/favoritesSlice';
import type { AppDispatch } from '../../redux/store';

export const ButtonFavorite = ({ addedFavorites, id }: { addedFavorites: boolean; id: number }): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    const handler = (): void => {
        const action = addedFavorites ? removeFromFavorites : addToFavorites;
        dispatch(action(id));
    };

    return (
        <button className={styles.button_favorite} type="button" onClick={handler}>
            <Heart customClass={`${styles.heart} ${addedFavorites ? styles.heart_active : ''}`} />
        </button>
    );
};
