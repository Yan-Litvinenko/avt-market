import { defer } from 'react-router-dom';

const getHomeData = async () => {
    // const inStockDataResponse: Response = await fetch(''); тут указать откуда берём данные для отображения списка машин в наличии
    // const listCarCardsResponse: Response = await fetch(''); тут указать откуда берём данные для отображения списка последних поступлений
    // return { inStock:inStockDataResponse , cardList: listCarCardsResponse};

    const mockInStockCars = [
        {
            name: 'Toyota Camry',
            count: 20,
        },
        {
            name: 'Honda Civic',
            count: 30,
        },

        {
            name: 'BWM',
            count: 30,
        },

        {
            name: 'Tesla',
            count: 30,
        },

        {
            name: 'Dodge',
            count: 30,
        },

        {
            name: 'Ford',
            count: 30,
        },

        {
            name: 'Audi',
            count: 30,
        },

        {
            name: 'Hummer',
            count: 30,
        },
    ];

    const mockCarCards = [
        {
            body: 'Седан',
            drive: 'Передний',
            fuel: 'Бензин',
            id: 1,
            inStock: true,
            manualTransmission: 'АКПП',
            mileage: 90000,
            name: 'Dodge',
            owners: 1,
            power: 300,
            priceNoFee: 3000,
            price: 300000,
            volume: '6.4',
            year: 2010,
        },
        {
            body: 'Седан',
            drive: 'Передний',
            fuel: 'Бензин',
            id: 2,
            inStock: true,
            manualTransmission: 'АКПП',
            mileage: 90000,
            name: 'Audi',
            owners: 1,
            power: 300,
            priceNoFee: 3000,
            price: 300000,
            volume: '6.4',
            year: 2010,
        },

        {
            body: 'Седан',
            drive: 'Передний',
            fuel: 'Бензин',
            id: 3,
            inStock: true,
            manualTransmission: 'АКПП',
            mileage: 90000,
            name: 'BMW',
            owners: 1,
            power: 300,
            priceNoFee: 3000,
            price: 300000,
            volume: '6.4',
            year: 2010,
        },

        {
            body: 'Седан',
            drive: 'Передний',
            fuel: 'Бензин',
            id: 4,
            inStock: true,
            manualTransmission: 'АКПП',
            mileage: 90000,
            name: 'Toyota',
            owners: 1,
            power: 300,
            priceNoFee: 3000,
            price: 300000,
            volume: '6.4',
            year: 2010,
        },
    ];

    const inStockDataResponse = mockInStockCars;
    const listCarCardsResponse = mockCarCards;

    return { inStock: Promise.resolve(inStockDataResponse), cardList: Promise.resolve(listCarCardsResponse) };
};

export const homeLoader = async () => {
    const data = await getHomeData();

    return defer({
        ...data,
    });
};
