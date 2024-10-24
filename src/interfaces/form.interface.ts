import { ExchangePostQuery } from './query.interface';

export type TradeInFormData = {
    agree: boolean;
    trade_in_credit: boolean;
} & ExchangePostQuery;
