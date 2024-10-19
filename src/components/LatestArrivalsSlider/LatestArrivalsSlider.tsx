import React from 'react';
import { Await } from 'react-router-dom';
import { CardAuto } from '../cardAuto/CardAuto';
import { favoritesSelector } from '../../redux/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mediaQuerySelector } from '../../redux/selectors';
import type { AutoCard } from '../../interfaces/interface';
import type { DataHomeLoader } from '../../interfaces/loader.interface';

export const LatestArrivalsSlider = (): React.JSX.Element => {
    const { cardList } = useLoaderData() as DataHomeLoader;
    const { isSmall, isMedium } = useSelector(mediaQuerySelector);
    const favoritesList = useSelector(favoritesSelector).favoritesList;
    const countSlide = (): number => {
        if (isSmall) return 1;
        return isMedium ? 2 : 3;
    };

    return (
        <>
            <React.Suspense>
                <Await resolve={cardList}>
                    {(resolveCardList) => {
                        return (
                            <>
                                <Swiper
                                    className="swiper-latest-arrivals"
                                    slidesPerView={countSlide()}
                                    spaceBetween={24}
                                >
                                    {(resolveCardList as AutoCard[]).map((car) => {
                                        return (
                                            <SwiperSlide key={car.id}>
                                                <CardAuto
                                                    {...car}
                                                    addedFavorites={Boolean(
                                                        favoritesList.find((item) => item.id === car.id),
                                                    )}
                                                />
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
