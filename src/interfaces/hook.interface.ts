import type { SliderField } from './interface';
import type { BuyoutFormData, ExchangeFormData, InstallmentFormData } from './form.interface';
import type { UseFormHandleSubmit, UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';

export type UseNumberPhoneProps = {
    phoneInput: React.MutableRefObject<HTMLInputElement | null>;
};

export type UseNumberPhone = [
    string,
    (event: React.KeyboardEvent<HTMLInputElement>) => void,
    (el: HTMLInputElement | null) => void,
];

export type UseExchange = {
    errors: FieldErrors<ExchangeFormData>;
    handleSubmit: UseFormHandleSubmit<ExchangeFormData, undefined>;
    inCreditField: boolean;
    onSubmit: (data: ExchangeFormData) => Promise<void>;
    register: UseFormRegister<ExchangeFormData>;
    sliderField: SliderField;
};

export type UseBuyout = {
    onSubmit: (data: BuyoutFormData) => Promise<void>;
    handleSubmit: UseFormHandleSubmit<BuyoutFormData, undefined>;
    register: UseFormRegister<BuyoutFormData>;
    errors: FieldErrors<BuyoutFormData>;
    setValue: UseFormSetValue<BuyoutFormData>;
};

export type UseInstallment = {
    errors: FieldErrors<InstallmentFormData>;
    handleSubmit: UseFormHandleSubmit<InstallmentFormData, undefined>;
    onSubmit: (data: InstallmentFormData) => Promise<void>;
    register: UseFormRegister<InstallmentFormData>;
    sliderField: SliderField;
};
