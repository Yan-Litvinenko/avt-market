export type ExchangePostQuery = {
    car_id: number;
    credit_term: number;
    customer_car: string;
    initial_contribution: number;
    name: string;
    phone: number;
};

export type BuyoutPostQuery = {
    id: number;
    name: string;
    phone: string;
    brand: string;
    model: string;
    year: number;
    mileage: number;
};
