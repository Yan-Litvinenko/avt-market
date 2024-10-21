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

export type CrossProps = {
    className: string;
    handler: () => void;
};

export type CheckboxProps = {
    id: string;
    textContent: string;
};

export type FormFieldPhoneProps = {
    id: string;
};

export type CardAutoProps = AutoCard & { addedFavorites: boolean };
