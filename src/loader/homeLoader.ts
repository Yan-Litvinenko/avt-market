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
            id: '1',
            title: 'Latest Honda Accord',
            description: 'Brand new model, just arrived!',
        },
        {
            id: '2',
            title: 'Latest Tesla Model 3',
            description: 'Fully electric, 2024 model.',
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
