import { useForm } from 'react-hook-form';
import type { BuyoutFormData } from '../interfaces/form.interface';
import type { BuyoutPostQuery } from '../interfaces/query.interface';
import type { UseBuyout } from '../interfaces/hook.interface';

export const useBuyout = (): UseBuyout => {
    const {
        register,
        setValue,
        formState: { errors },
        handleSubmit,
    } = useForm<BuyoutFormData>({
        mode: 'all',
    });

    const onSubmit = async (data: BuyoutFormData) => {
        if (!data.agree || !data.agree_country) return;

        const dataQuery: BuyoutPostQuery = {
            brand: data.brand,
            id: data.id,
            mileage: data.mileage,
            model: data.model,
            name: data.name,
            phone: data.phone,
            year: data.year,
        };

        const response = await fetch(`${process.env.REACT_APP_BASE_URL!}/buyout`, {
            method: 'POST',
            body: JSON.stringify(dataQuery),
            headers: {
                'content-type': 'application/json',
            },
        });

        const resolveResponse = await response.json();

        alert(JSON.stringify(resolveResponse));
    };

    return { handleSubmit, onSubmit, errors, register, setValue };
};
