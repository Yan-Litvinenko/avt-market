import React from 'react';
import styles from './Buyout.module.scss';
import { Benefits } from '../../components/benefits/Benefits';
import { createYearsArray } from '../../helpers/createYearsArray';
import { FormField } from '../../components/formField/FormField';
import { FormFieldPhone } from '../../components/formFieldPhone/FormFieldPhone';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { CheckboxAgree } from '../../components/checkboxAgree/CheckboxAgree';
import { FormSendButton } from '../../components/formSendButton/FormSendButton';
import { FormFieldSelectYear } from '../../components/formFieldSelectYear/FormFieldSelectYear';
import type { BenefitsProps } from '../../interfaces/interface';

const benefits: BenefitsProps[] = [
    {
        title: 'Рыночная цена',
        description:
            'Будьте уверены, что оценка автомобиля будет максимально лояльной, соответствующей рыночным ценам, и Вы получите всю сумму на руки.',
    },
    {
        title: 'Мгновенная выплата',
        description: 'После оформления документов Вы получите всю сумму на руки без задержек и проволочек.',
    },
    {
        title: 'Бесплатная оценка',
        description: 'Мы предлагаем бесплатную оценку с возможностью выезда независимого мастера-оценщика.',
    },
    {
        title: 'Оформление до 30 мин.',
        description:
            'Благодаря представительсту банков-партнеров в автоцентре процессу одобрения автокредита займет не более 30 минут.',
    },
];

export const Buyout = (): React.JSX.Element => {
    return (
        <div className="container">
            <div className={styles.buyout}>
                <h1 className={styles.buyout__title}>Выкуп авто в Москве</h1>
                <Benefits benefits={benefits} />
                <div className={styles.buyout__content}>
                    <form className={styles.buyout__form}>
                        <FormField id="buyout_mark" placeholder="Марка" />
                        <FormField id="buyout_model" placeholder="Модель" />
                        <FormFieldSelectYear textContent="Год" years={createYearsArray(2004, 2024)} />
                        <FormField id="buyout_mileage" placeholder="Пробег" />
                        <FormField id="buyout_name" placeholder="ФИО" />
                        <FormFieldPhone id="buyout_phone" />
                        <Checkbox id="buyout_agree_country" textContent="Подтверждаю наличие гражданства РФ" />
                        <CheckboxAgree id="buyout_agree_data" />
                        <FormSendButton textContent="Оставить заявку" />
                    </form>

                    <div className={styles.buyout__description}>
                        <p>
                            Самостоятельная продажа автомобиля зачастую занимает много времени. Наш автосалон предлагает
                            выкуп вашего автомобиля с пробегом любой марки с бесплатной оценкой в удобном для вас месте
                            и времени.
                        </p>

                        <ul>
                            <li>
                                <h3>Почему выкуп автомобиля — это выгодно?</h3>
                            </li>
                            <li>Экономия времени, денежных средств и потраченных нервов.</li>
                            <li>Быстрое получение денег.</li>
                            <li>Юридическое сопровождение.</li>
                            <li>Отсутствие рисков.</li>
                            <li>Любое состояние подержанного авто.</li>
                        </ul>
                        <p>
                            Свяжитесь с нами, чтобы получить дополнительную информацию по выкупу авто с пробегом в
                            Москве.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
