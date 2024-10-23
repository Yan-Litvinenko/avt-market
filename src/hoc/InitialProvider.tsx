import React from 'react';
import { useMedia } from '../hook/useMedia';
import { useBanksList } from '../hook/useBanksList';

export const InitialProvider = ({ children }: { children: React.ReactNode }) => {
    useMedia();
    useBanksList();

    return <>{children}</>;
};
