import React from 'react';
import styles from './Installment.module.scss';
import { Benefits } from '../../components/benefits/Benefits';
import { SelectAutoButton } from '../../components/selectAutoButton/SelectAutoButton';
import { FormFieldPhone } from '../../components/formFieldPhone/FormFieldPhone';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { CheckboxAgree } from '../../components/checkboxAgree/CheckboxAgree';
import { FieldSlider } from '../../components/fieldSlider/FieldSlider';
import { FormField } from '../../components/formField/FormField';
import { FormSendButton } from '../../components/formSendButton/FormSendButton';
import { BanksList } from '../../components/banksList/BanksList';
import type { BenefitsProps } from '../../interfaces/interface';

const benefits: BenefitsProps[] = [
    {
        title: 'Первый взнос 0%',
        description: 'Вы можете приобрести автомобиль в рассрочку без первоначального взноса.',
    },
    {
        title: 'Оформление по 2 документам',
        description:
            'Для оформления автомобиля в рассрочку Вам потребуются только паспорт и водительское удостоверение.',
    },
    {
        title: 'Гарантия 1 год',
        description: 'Автоцентр предоставляет гарантию на техническое состояние автомобиля с момента покупки',
    },
    {
        title: 'Скидка до 300 000 ₽',
        description:
            'При оформлении автомобиля в рассрочку Вам предоставляется дополнительная скидка от изначальной стоимости автомобиля.',
    },
    {
        title: 'Trade-In как первый взнос',
        description:
            'В качестве первоначального взноса Вы можете сдать свой автомобиль по системе Trade-In с дополнительной скидкой до 300 000 ₽.',
    },
];

export const Installment = (): React.JSX.Element => {
    return (
        <div className="container">
            <div className={styles.installment}>
                <h1 className={styles.installment__title}>Автомобиль в рассрочку по 2 документам</h1>
                <Benefits benefits={benefits} />
                <div className={styles.installment__content}>
                    <form className={styles.installment__form}>
                        <SelectAutoButton />
                        <FieldSlider
                            titleText="Срок кредита, мес.:"
                            value={0}
                            unitOfMeasurement="мес."
                            step={10}
                            endpoints={['2', '6', '12', '24', '36']}
                            ticksContentWidth={'calc(100% - 23px)'}
                            ticksLeft="17px"
                        />
                        <FieldSlider
                            titleText="Первоначальный взнос:"
                            value={0}
                            unitOfMeasurement="&#8381;"
                            step={10}
                            endpoints={['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%']}
                            ticksContentWidth={'calc(100% - 10px)'}
                            ticksLeft="15px"
                        />
                        <h3>Ваш платёж:</h3>
                        <FormField id="installment_your_name" placeholder="ФИО" />
                        <FormFieldPhone id="installment_credit_phone" />
                        <Checkbox id="installment_agree_country" textContent="Подтверждаю наличие гражданства РФ" />
                        <CheckboxAgree id="installment_agree" />
                        <FormSendButton textContent="Оставить заявку" />
                    </form>
                    <div className={styles.installment__description}>
                        <p className={styles.installment__text}>
                            Автоцентр «You-Auto» предлагает вам возможность приобрести автомобиль в рассрочку без
                            переплат и процентов.
                        </p>
                        <p className={styles.installment__text}>
                            Рассрочка - это удобный способ приобретения подержанного автомобиля и идеальное решение,
                            если вы можете погасить его за срок до 3 лет. Если выплата всей стоимости автомобиля в
                            течение 3 лет будет невозможна, отличным вариантом может стать автокредит с процентной
                            ставкой от 4.9% и со скидкой до 300 000 ₽.
                        </p>
                    </div>
                </div>
                <div className={styles.installment__banks}>
                    <h2 className={styles.installment__banks_title}>Банки-партнеры</h2>
                    <BanksList />
                </div>
            </div>
        </div>
    );
};
