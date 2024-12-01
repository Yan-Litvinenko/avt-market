import React from 'react';
import { mediaQuerySelector } from '../redux/selectors';
import { setMediaState } from '../redux/slice/mediaQuerySlice';
import { useDispatch, useSelector } from 'react-redux';

const useMedia = (): void => {
    const medium = useSelector(mediaQuerySelector).MEDIUM;
    const dispatch = useDispatch();

    React.useEffect(() => {
        const handleResize = () => {
            const isMedium: boolean = window.innerWidth <= medium;

            dispatch(setMediaState({ isMedium }));
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
};

export { useMedia };
