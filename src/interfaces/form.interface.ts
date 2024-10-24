import { ExchangePostQuery, BuyoutPostQuery, InstallmentPostQuery } from './query.interface';

export type RegisterNameFormField = 'name' | 'brand' | 'mileage' | 'year' | 'phone' | 'id' | 'model' | 'customer_car';
export type RegisterNameFormFieldSlider = 'credit_term' | 'initial_contribution';
export type RegisterNameCheckbox = 'agree' | 'agree_country' | 'trade_in_credit';

export type ExchangeFormData = {
    agree: boolean;
    trade_in_credit: boolean;
} & ExchangePostQuery;

export type BuyoutFormData = {
    agree: boolean;
    agree_country: boolean;
} & BuyoutPostQuery;

export type InstallmentFormData = {
    agree: boolean;
    agree_country: boolean;
} & InstallmentPostQuery;
