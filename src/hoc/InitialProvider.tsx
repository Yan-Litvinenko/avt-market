import React from 'react';
import { useMedia } from '../hook/useMedia';

export const InitialProvider = ({ children }: { children: React.ReactNode }) => {
    useMedia();
    return <>{children}</>;
};
