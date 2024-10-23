import type { AutoCard, InStockCar } from './interface';

export type DataHomeLoader = {
    inStock: InStockCar[];
    cardList: AutoCard[];
};

export type DataBanksLoader = {
    name: string;
    id: number;
};
