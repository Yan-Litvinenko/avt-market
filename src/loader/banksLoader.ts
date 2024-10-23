import { defer } from 'react-router-dom';

const getDataBanks = async (): Promise<Response> => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL!}/banks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
};

export const banksLoader = async () => {
    const banksList = getDataBanks();

    return defer({
        banksList,
    });
};
