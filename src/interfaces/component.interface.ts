import type { AutoCard } from './interface';
import type { FieldValues, UseFormRegister, UseFormRegisterReturn, UseFormSetValue, Path } from 'react-hook-form';
import type { RegisterNameFormFieldSlider, RegisterNameCheckbox, RegisterNameFormField } from './form.interface';

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
    register: UseFormRegisterReturn<RegisterNameFormField>;
    isError: boolean;
};

export type FormFieldSelectProps<T extends FieldValues> = {
    fieldName: Path<T>;
    isError: boolean;
    items: number[] | string[];
    register?: UseFormRegisterReturn<'year'>;
    setFormValue: UseFormSetValue<T>;
    placeholder: string;
};

export type CheckboxProps = {
    id: string;
    isError?: boolean | 'no error';
    register?: UseFormRegisterReturn<RegisterNameCheckbox>;
    textContent: string;
};

export type FormFieldPhoneProps<T extends FieldValues> = {
    id: string;
    register: UseFormRegister<T>;
    isError: boolean;
};

export type BanksListItem = {
    name: string;
    id: number;
};

export type CardAutoProps = AutoCard & { addedFavorites: boolean };

export type SelectAutoButtonProps = {
    isError: boolean;
    register: UseFormRegisterReturn<'car_id'>;
};

export type FormSendButtonProps = {
    textContent: string;
};
