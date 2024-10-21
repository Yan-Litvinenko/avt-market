import React from 'react';
import styles from './FormSendButton.module.scss';

export const FormSendButton = ({ textContent }: { textContent: string }): React.JSX.Element => {
    return (
        <button className={styles.form_send_button} type="submit">
            {textContent}
        </button>
    );
};
