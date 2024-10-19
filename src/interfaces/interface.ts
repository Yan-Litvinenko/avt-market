export type InStockCar = {
    id: number;
    name: string;
    count: number;
};

export type ModalPromotionData = {
    descrption: string;
    title: string;
    link?: string;
    img: string;
};

export type AutoCard = {
    body: string;
    drive: string;
    fuel: string;
    id: number;
    inStock: boolean;
    manualTransmission: string;
    mileage: number;
    name: string;
    owners: number;
    power: number;
    priceNoFee: number;
    price: number;
    volume: string;
    year: number;
};

export type FavoritesLocalStorage = {
    id: number;
};
