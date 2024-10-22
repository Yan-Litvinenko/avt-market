import React from 'react';
import styles from './ModalCallback.module.scss';
import { callbackModalTrigger } from '../../redux/slice/callbackModalSlice';
import { CheckboxAgree } from '../checkboxAgree/CheckboxAgree';
import { Cross } from '../cross/Cross';
import { FormField } from '../formField/FormField';
import { FormFieldPhone } from '../formFieldPhone/FormFieldPhone';
import { FormFieldSelect } from '../formFieldSelect/FormFieldSelect';
import { FormSendButton } from '../formSendButton/FormSendButton';
import { useDispatch, useSelector } from 'react-redux';
import { modalCallbackSelector } from '../../redux/selectors';
import { scrollManager } from '../../helpers/Scroll';

export const ModalCallback = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const callbackModalState: boolean = useSelector(modalCallbackSelector).callbackModalState;
    const crossHandler = (): void => {
        dispatch(callbackModalTrigger());
        scrollManager.scrollOn();
    };

    return (
        <div
            className={`${styles.modal_callback} ${callbackModalState ? styles.modal_callback_active : ''}`}
            onClick={crossHandler}
        >
            <div className={`${styles.modal_callback__inner} `} onClick={(event) => event.stopPropagation()}>
                <h3 className={styles.modal_callback__title}>Обратный звонок</h3>
                <div className={styles.modal_callback__content}>
                    <form className={styles.modal_callback__form}>
                        <h4 className={styles.modal_callback__form_title}>
                            <span>Оставьте заявку, и наши операторы свяжутся с вами в течение 5 минут!</span>
                            <Cross className={styles.modal_callback__cross} handler={crossHandler} />
                        </h4>
                        <FormField id="callback_name" placeholder="ФИО" />
                        <FormFieldPhone id="callback_phone" />
                        <FormFieldSelect
                            textContent="Когда вам перезвонить"
                            items={[
                                'Как можно скорее',
                                'с 17:00 до 18:00',
                                'с 18:00 до 19:00',
                                'с 19:00 до 20:00',
                                'с 20:00 до 21:00',
                            ]}
                        />
                        <CheckboxAgree id="callback_agree" />
                        <FormSendButton textContent="Перезвонить мне" />
                    </form>
                </div>
            </div>
        </div>
    );
};
