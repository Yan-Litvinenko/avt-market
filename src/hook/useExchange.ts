import { useForm } from 'react-hook-form';
import type { ExchangeFormData } from '../interfaces/form.interface';
import type { ExchangePostQuery } from '../interfaces/query.interface';
import type { UseExchange } from '../interfaces/hook.interface';
import type { SliderField } from '../interfaces/interface';

const sliderField: SliderField = {
    steps: {
        credit_terms: [2, 6, 12, 24, 36, 48, 60, 72, 84, 96],
        initial_contribution: [0, 10, 20, 30, 40, 50, 60, 70, 80],
    },
    endpoints: {
        credit_terms: [2, 6, 12, 24, 36, 48, 60, 72, 84, 96],
        initial_contribution: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%'],
    },
};

export const useExchange = (): UseExchange => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        // setError,
        watch,
    } = useForm<ExchangeFormData>({
        mode: 'onSubmit',
        defaultValues: {
            trade_in_credit: true,
        },
    });

    const inCreditField: boolean = watch('trade_in_credit', true);

    const onSubmit = async (data: ExchangeFormData) => {
        // if (typeof data.car_id !== 'number') {
        //     setError('car_id', {
        //         type: 'select',
        //         message: 'Выберите машину',
        //     });
        //     return;
        // }

        const dataQuery = {
            exchange: {
                car_id: 1,
                credit_term: data.trade_in_credit ? sliderField.steps.credit_terms[data.credit_term] : 0,
                customer_car: data.customer_car,
                initial_contribution: data.trade_in_credit
                    ? sliderField.steps.initial_contribution[data.initial_contribution]
                    : 0,
                name: data.name,
                phone: data.phone,
            } as ExchangePostQuery,
        };

        const response = await fetch(`${process.env.REACT_APP_BASE_URL!}/exchange`, {
            method: 'POST',
            body: JSON.stringify(dataQuery),
            headers: {
                'content-type': 'application/json',
            },
        });

        if (response.ok) {
            // redirect
            const resolve = await response.json();
            alert(JSON.stringify(resolve));
        }
    };

    return { sliderField, handleSubmit, onSubmit, register, errors, inCreditField };
};
