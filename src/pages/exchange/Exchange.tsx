import React from 'react';
import styles from './Exchange.module.scss';
import { BanksList } from '../../components/banksList/BanksList';
import { Benefits } from '../../components/benefits/Benefits';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { CheckboxAgree } from '../../components/checkboxAgree/CheckboxAgree';
import { FieldSlider } from '../../components/fieldSlider/FieldSlider';
import { FormField } from '../../components/formField/FormField';
import { FormFieldPhone } from '../../components/formFieldPhone/FormFieldPhone';
import { FormSendButton } from '../../components/formSendButton/FormSendButton';
import { SelectAutoButton } from '../../components/selectAutoButton/SelectAutoButton';
import { useExchange } from '../../hook/useExchange';

export const Exchange = (): React.JSX.Element => {
    const { benefits, sliderField, handleSubmit, onSubmit, register, errors, inCreditField } = useExchange();

    return (
        <>
            <div className="container">
                <div className={styles.trade_in}>
                    <h1 className={styles.trade_in__title}>Авто в Trade-In в Москве</h1>
                    <Benefits benefits={benefits} />

                    <div className={styles.trade_in__content}>
                        <form className={styles.trade_in__form} onSubmit={handleSubmit(onSubmit)}>
                            <SelectAutoButton
                                isError={Boolean(errors.car_id)}
                                register={register('car_id', {
                                    // pattern: {
                                    //     value: /^[0-9]+$/,
                                    //     message: 'Выберите машину',
                                    // },
                                })}
                            />
                            <Checkbox
                                register={register('trade_in_credit')}
                                id="trade_in_credit"
                                textContent="Купить авто в кредит"
                                isError={'no error'}
                            />

                            <div
                                className={styles.trade_in__extra_fields}
                                style={{ height: inCreditField ? '100%' : '0%' }}
                            >
                                <FieldSlider
                                    endpoints={sliderField.endpoints.credit_terms}
                                    initValue={0}
                                    register={register('credit_term', { required: true })}
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
                                    steps={sliderField.steps.initial_contribution as number[]}
                                    ticksContentWidth={'calc(100% - 10px)'}
                                    ticksLeft="15px"
                                    titleText="Первоначальный взнос:"
                                    unitOfMeasurement="&#8381;"
                                />
                            </div>

                            <h3>Ваш платёж:</h3>
                            <FormField
                                register={register('customer_car', {
                                    required: true,
                                    minLength: {
                                        value: 2,
                                        message: 'Минимальная длина - 2 символа.',
                                    },
                                })}
                                id="trade_in_your_auto"
                                placeholder="Ваш автомобиль"
                                isError={Boolean(errors.customer_car)}
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
                                isError={Boolean(errors.name)}
                            />
                            <FormFieldPhone
                                register={register}
                                id="trade_in_credit_phone"
                                isError={Boolean(errors.phone)}
                            />
                            <CheckboxAgree
                                register={register('agree', { required: true })}
                                id="trade_in_agree"
                                isError={Boolean(errors.agree)}
                            />
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
