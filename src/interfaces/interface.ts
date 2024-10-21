export type InStockCar = {
    id: number;
    name: string;
    count: number;
};

export type MenuElement = {
    name: string;
    link: string;
};

export type BenefitsProps = {
    description: string;
    title: string;
};

export type ModalPromotionData = {
    link?: string;
    img: string;
} & BenefitsProps;

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
