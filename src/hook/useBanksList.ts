import React from 'react';
import { banksListLoader } from '../redux/slice/banksListSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';

export const useBanksList = () => {
    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        dispatch(banksListLoader());
    }, []);
};
