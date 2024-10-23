import React from 'react';
import styles from './TradeIn.module.scss';
import { BanksList } from '../../components/banksList/BanksList';
import { Benefits } from '../../components/benefits/Benefits';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { CheckboxAgree } from '../../components/checkboxAgree/CheckboxAgree';
import { FieldSlider } from '../../components/fieldSlider/FieldSlider';
import { FormField } from '../../components/formField/FormField';
import { FormFieldPhone } from '../../components/formFieldPhone/FormFieldPhone';
import { FormSendButton } from '../../components/formSendButton/FormSendButton';
import { SelectAutoButton } from '../../components/selectAutoButton/SelectAutoButton';
import { useForm } from 'react-hook-form';
import type { BenefitsProps } from '../../interfaces/interface';
import type { TradeInFormData } from '../../interfaces/form.interface';

const benefits: BenefitsProps[] = [
    {
        title: 'Гарантия 1 год',
        description: 'Автоцентр предоставляет гарантию на техническое состояние автомобиля с момента покупки.',
    },
    {
        title: 'Выгода до 300 000 ₽',
        description:
            'При оформлении автомобиля в кредит Вам предоставляется дополнительная скидка от изначальной стоимости автомобиля.',
    },
    {
        title: 'Trade-In как первый взнос',
        description:
            'В качестве первоначального взноса Вы можете сдать свой автомобиль по системе Trade-In с дополнительной скидкой до 300 000 ₽.',
    },
    {
        title: 'По 2 документам',
        description: 'Для оформления автомобиля в кредит Вам потребуются только паспорт и водительское удостоверение.',
    },
    {
        title: 'Второй комплект резины',
        description: 'При покупке автомобиля каждый клиент получает второй комплект резины в подарок.',
    },
    {
        title: 'Среднерыночная цена',
        description:
            'Будьте уверены, что оценка автомобиля будет максимально лояльной, соответствующей рыночным ценам, и Вы получите всю сумму на руки.',
    },
];

const sliderField = {
    steps: {
        credit_terms: [2, 6, 12, 24, 36, 48, 60, 72, 84, 96],
        initial_contribution: [0, 10, 20, 30, 40, 50, 60, 70, 80],
    },
    endpoints: {
        credit_terms: [2, 6, 12, 24, 36, 48, 60, 72, 84, 96],
        initial_contribution: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%'],
    },
};

export const TradeIn = (): React.JSX.Element => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm<TradeInFormData>({ mode: 'onChange' });

    const onSubmit = (data: TradeInFormData) => {
        if (typeof data.car_id !== 'number') {
            setError('car_id', {
                type: 'select',
                message: 'Выберите машину',
            });
            return;
        }

        const result = {
            car_id: data.car_id,
            credets_terms: sliderField.steps.credit_terms[data.credit_terms],
            custom_car: data.custom_car,
            initial_contribution: sliderField.steps.initial_contribution[data.initial_contribution],
            name: data.name,
            phone: data.phone,
        };

        alert(JSON.stringify(result));
    };

    return (
        <>
            <div className="container">
                <div className={styles.trade_in}>
                    <h1 className={styles.trade_in__title}>Авто в Trade-In в Москве</h1>
                    <Benefits benefits={benefits} />

                    <div className={styles.trade_in__content}>
                        <form className={styles.trade_in__form} onSubmit={handleSubmit(onSubmit)}>
                            <SelectAutoButton
                                isError={Boolean(errors.car_id?.message)}
                                register={register('car_id', {
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Выберите машину',
                                    },
                                })}
                            />
                            <Checkbox id="trade_in_credit" textContent="Купить авто в кредит" />
                            <FieldSlider
                                endpoints={sliderField.endpoints.credit_terms}
                                initValue={0}
                                register={register('credit_terms', { required: true })}
                                steps={sliderField.steps.credit_terms}
                                ticksContentWidth={'calc(100% - 19px)'}
                                ticksLeft="14px"
                                titleText="Срок кредита, мес.:"
                                unitOfMeasurement="мес."
                            />
                            <FieldSlider
                                endpoints={sliderField.endpoints.initial_contribution}
                                initValue={0}
                                register={register('initial_contribution', { required: true })}
                                steps={sliderField.steps.initial_contribution}
                                ticksContentWidth={'calc(100% - 10px)'}
                                ticksLeft="15px"
                                titleText="Первоначальный взнос:"
                                unitOfMeasurement="&#8381;"
                            />
                            <h3>Ваш платёж:</h3>
                            <FormField
                                register={register('custom_car', {
                                    required: true,
                                    minLength: {
                                        value: 2,
                                        message: 'Минимальная длина - 2 символа.',
                                    },
                                })}
                                id="trade_in_your_auto"
                                placeholder="Ваш автомобиль"
                                isError={Boolean(errors.custom_car?.message)}
                            />
                            <FormField
                                register={register('name', {
                                    required: true,
                                    minLength: {
                                        value: 2,
                                        message: 'Минимальная длина - 2 символа.',
                                    },
                                })}
                                id="trade_in_your_name"
                                placeholder="ФИО"
                                isError={Boolean(errors.name?.message)}
                            />
                            <FormFieldPhone register={register} id="trade_in_credit_phone" />
                            <CheckboxAgree register={register('agree', { required: true })} id="trade_in_agree" />
                            <FormSendButton textContent="Оставить заявку" />
                        </form>

                        <p className={styles.trade_in__description}>
                            Автосалон «YouAuto» предлагает услугу Trade-In, которая пользуется популярностью на
                            автомобильном рынке. Trade-In предполагает обмен вашего текущего автомобиля на более новый.
                            Этот способ позволяет сэкономить время, которое обычно тратится на продажу старого
                            автомобиля, и обновить ваш транспорт за несколько часов. Вы можете изменить свой текущий
                            автомобиль с выгодой до 300 000 ₽, на автомобиль с пробегом из представленных на нашем
                            сайте.
                        </p>
                    </div>
                </div>
                <div className={styles.trade_in__banks}>
                    <h2 className={styles.trade_in__banks_title}>Банки-партнеры</h2>
                    <BanksList />
                </div>
            </div>
        </>
    );
};
