import type { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import type { AutoCard } from './interface';
import type { TradeInFormData } from './form.interface';

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

export type FieldSliderProps = {
    endpoints: string[] | number[];
    initValue: number;
    register: UseFormRegisterReturn<'credit_term' | 'initial_contribution'>;
    steps: number[];
    ticksContentWidth: string;
    ticksLeft: string;
    titleText: string;
    unitOfMeasurement: string;
};

export type FormFieldProps = {
    id: string;
    placeholder: string;
    register: UseFormRegisterReturn<'name' | 'customer_car'>;
    isError: boolean;
};

export type FormFieldSelectProps = {
    textContent: string;
    items: number[] | string[];
};

export type CheckboxProps = {
    id: string;
    textContent: string;
    register?: UseFormRegisterReturn<'agree' | 'trade_in_credit'>;
};

export type FormFieldPhoneProps = {
    id: string;
    register: UseFormRegister<TradeInFormData>;
};

export type BanksListItem = {
    name: string;
    id: number;
};

export type CardAutoProps = AutoCard & { addedFavorites: boolean };

export type SelectAutoButtonProps = {
    register: UseFormRegisterReturn<'car_id'>;
    isError: boolean;
};
