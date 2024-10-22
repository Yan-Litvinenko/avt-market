import React from 'react';
import styles from './TradeIn.module.scss';
import { Benefits } from '../../components/benefits/Benefits';
import { BanksList } from '../../components/banksList/BanksList';
import { SelectAutoButton } from '../../components/selectAutoButton/SelectAutoButton';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { FormField } from '../../components/formField/FormField';
import { CheckboxAgree } from '../../components/checkboxAgree/CheckboxAgree';
import { FormSendButton } from '../../components/formSendButton/FormSendButton';
import { FormFieldPhone } from '../../components/formFieldPhone/FormFieldPhone';
import { FieldSlider } from '../../components/fieldSlider/FieldSlider';
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
                            <Checkbox id="trade_in_credit" textContent="Купить авто в кредит" />
                            <FieldSlider
                                titleText="Срок кредита, мес.:"
                                value={0}
                                unitOfMeasurement="мес."
                                step={10}
                                endpoints={['2', '6', '12', '24', '36', '48', '60', '72', '84', '96']}
                                ticksContentWidth={'calc(100% - 23px)'}
                                ticksLeft="17px"
                            />
                            <FieldSlider
                                titleText="Первоначальный взнос:"
                                value={0}
                                unitOfMeasurement="&#8381;"
                                step={10}
                                endpoints={['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%']}
                                ticksContentWidth={'calc(100% - 10px)'}
                                ticksLeft="15px"
                            />
                            <h3>Ваш платёж:</h3>
                            <FormField id="trade_in_your_auto" placeholder="Ваш автомобиль" />
                            <FormField id="trade_in_your_name" placeholder="ФИО" />
                            <FormFieldPhone id="trade_in_credit_phone" />
                            <CheckboxAgree id="trade_in_agree" />
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
