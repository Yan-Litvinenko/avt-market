import type { URL } from '../interfaces/interface';

export const custmFetch = async <T>(url: URL, data: string, method: 'POST' | 'GET'): Promise<T> => {
    console.log(data);
    const response = await fetch(`${process.env.REACT_APP_BASE_URL!}/${url}`, {
        method,
        body: data,
        headers: {
            'content-type': 'application/json',
        },
    });

    console.log(response);

    if (!response.ok) {
        throw new Error(`Ошибка при обращении к ${process.env.REACT_APP_BASE_URL!}/${url}`);
    }

    return response.json();
};
