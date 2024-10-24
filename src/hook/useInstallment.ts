import { custmFetch } from '../helpers/customFetch';
import { useForm } from 'react-hook-form';
import type { InstallmentFormData } from '../interfaces/form.interface';
import type { InstallmentPostQuery } from '../interfaces/query.interface';
import type { SliderField } from '../interfaces/interface';
import type { UseInstallment } from '../interfaces/hook.interface';

export const useInstallment = (): UseInstallment => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<InstallmentFormData>({ mode: 'all' });

    const sliderField: SliderField = {
        steps: {
            credit_terms: [2, 6, 12, 24, 36],
            initial_contribution: [0, 10, 20, 30, 40, 50, 60, 70],
        },
        endpoints: {
            credit_terms: [2, 6, 12, 24, 36],
            initial_contribution: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%'],
        },
    };

    const onSubmit = async (data: InstallmentFormData) => {
        if (!data.agree || !data.agree_country) return;

        const dataQuery = {
            installment: {
                car_id: 1, // заменить когда сделаю карточки
                credit_term: data.credit_term,
                initial_contribution: data.initial_contribution,
                name: data.name,
                phone: data.phone,
            } as InstallmentPostQuery,
        };

        const response = (await custmFetch('installment', JSON.stringify(dataQuery), 'POST')) as InstallmentPostQuery;

        alert(JSON.stringify(response));
    };

    return { register, handleSubmit, errors, sliderField, onSubmit };
};
