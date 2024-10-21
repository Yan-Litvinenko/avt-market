import React from 'react';
import styles from './TradeIn.module.scss';
import { Benefits } from '../../components/benefits/Benefits';
import { BanksList } from '../../components/banksList/BanksList';
import { SelectAutoButton } from '../../components/selectAutoButton/SelectAutoButton';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { FormFieldPhone } from '../../components/formFieldPhone/FormFieldPhone';
import type { BenefitsProps } from '../../interfaces/interface';

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

export const TradeIn = (): React.JSX.Element => {
    return (
        <>
            <div className="container">
                <div className={styles.trade_in}>
                    <h1 className={styles.trade_in__title}>Авто в Trade-In в Москве</h1>
                    <Benefits benefits={benefits} />

                    <div className={styles.trade_in__content}>
                        <form className={styles.trade_in__form}>
                            <SelectAutoButton />
                            <Checkbox id="buy_in_credit" textContent="Купить авто в кредит" />
                            <FormFieldPhone id="buy_in_credit_phone" />
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
                    <h2>Банки-партнеры</h2>
                    <BanksList />
                </div>
            </div>
        </>
    );
};
