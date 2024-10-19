import React from 'react';
import { HeaderSlider } from '../../components/headerSlider/HeaderSlider';
import { InStock } from '../../components/inStock/InStock';
import { Promotion } from '../../components/promotion/Promotion';
import { LatestArrivals } from '../../components/latestArrivals/LatestArrivals';

export const Home = (): React.JSX.Element => {
    return (
        <>
            <HeaderSlider />
            <InStock />
            <LatestArrivals />
            <Promotion />
        </>
    );
};
