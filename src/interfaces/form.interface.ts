import { ExchangePostQuery } from './query.interface';

export type RegisterNameFormFieldExchange = 'name' | 'customer_car';
export type RegisterNameFormFieldSlider = 'credit_term' | 'initial_contribution';
export type RegisterNameCheckbox = 'agree' | 'trade_in_credit';

export type ExchangeFormData = {
    agree: boolean;
    trade_in_credit: boolean;
} & ExchangePostQuery;
