import { useForm } from 'react-hook-form';
import { custmFetch } from '../helpers/customFetch';
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

        custmFetch('buyout', JSON.stringify(dataQuery), 'POST');
    };

    return { handleSubmit, onSubmit, errors, register, setValue };
};
