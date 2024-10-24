import type { FieldValues, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import type { AutoCard } from './interface';
import type {
    RegisterNameFormFieldExchange,
    RegisterNameFormFieldSlider,
    RegisterNameCheckbox,
} from './form.interface';

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
    register: UseFormRegisterReturn<RegisterNameFormFieldSlider>;
    steps: number[];
    ticksContentWidth: string;
    ticksLeft: string;
    titleText: string;
    unitOfMeasurement: string;
};

export type FormFieldProps = {
    id: string;
    placeholder: string;
    register: UseFormRegisterReturn<RegisterNameFormFieldExchange>;
    isError: boolean;
};

export type FormFieldSelectProps = {
    textContent: string;
    items: number[] | string[];
};

export type CheckboxProps = {
    id: string;
    textContent: string;
    register?: UseFormRegisterReturn<RegisterNameCheckbox>;
};

export type FormFieldPhoneProps<T extends FieldValues> = {
    id: string;
    register: UseFormRegister<T>;
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
