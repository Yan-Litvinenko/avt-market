import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';

export const Layout = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
