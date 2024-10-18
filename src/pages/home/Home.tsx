import React from 'react';
import { Slider } from '../../components/slider/Slider';
import { InStock } from '../../components/inStock/InStock';

export const Home = (): React.JSX.Element => {
    return (
        <>
            <Slider />
            <InStock />
        </>
    );
};
