import type { BenefitsProps, SliderField } from './interface';
import type { ExchangeFormData } from './form.interface';
import type { UseFormHandleSubmit, UseFormRegister, FieldErrors } from 'react-hook-form';

export type UseNumberPhoneProps = {
    phoneInput: React.MutableRefObject<HTMLInputElement | null>;
};

export type UseNumberPhone = [
    string,
    (event: React.KeyboardEvent<HTMLInputElement>) => void,
    (el: HTMLInputElement | null) => void,
];

export type UseExchange = {
    benefits: BenefitsProps[];
    errors: FieldErrors<ExchangeFormData>;
    handleSubmit: UseFormHandleSubmit<ExchangeFormData, undefined>;
    inCreditField: boolean;
    onSubmit: (data: ExchangeFormData) => Promise<void>;
    register: UseFormRegister<ExchangeFormData>;
    sliderField: SliderField;
};
