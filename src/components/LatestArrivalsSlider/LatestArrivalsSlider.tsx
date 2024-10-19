import React from 'react';
import { Await } from 'react-router-dom';
import { CardAuto } from '../cardAuto/CardAuto';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { AutoCard } from '../../interfaces/interface';
import type { DataHomeLoader } from '../../interfaces/loader.interface';

export const LatestArrivalsSlider = (): React.JSX.Element => {
    const { cardList } = useLoaderData() as DataHomeLoader;

    return (
        <>
            <React.Suspense>
                <Await resolve={cardList}>
                    {(resolveCardList) => {
                        return (
                            <>
                                <Swiper className="swiper-latest-arrivals" slidesPerView={3} spaceBetween={24}>
                                    {(resolveCardList as AutoCard[]).map((car) => {
                                        return (
                                            <SwiperSlide>
                                                <CardAuto {...car} />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </>
                        );
                    }}
                </Await>
            </React.Suspense>
        </>
    );
};
