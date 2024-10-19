import type { AutoCard } from './interface';

export type SliderElementProps = {
    descriptionStroke: string[];
    imgPath: string;
    imgPath2x: string;
    linkPath: string;
    title: string;
};

export type LogoProps = {
    className: string;
};

export type CardAutoProps = AutoCard & { addedFavorites: boolean };
