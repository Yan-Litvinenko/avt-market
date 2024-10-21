import React from 'react';
import type { UseNumberPhoneProps, UseNumberPhone } from '../interfaces/hook.interface';

export const useNumberPhone = ({ phoneInput }: UseNumberPhoneProps): UseNumberPhone => {
    const PHONE_INIT = '+7 (___) ___-__-__';
    const [value, setValue] = React.useState<string>('');
    const cursorPosition = React.useRef<number>(PHONE_INIT.indexOf('_'));

    const setCursorIndex = (newPositionCursor: number): void => {
        cursorPosition.current = newPositionCursor;
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const input = phoneInput.current;

        if (!input) return;

        event.preventDefault();

        if (event.key === 'Backspace') {
            setValue((prev) => {
                const newValue = prev.slice(0, 3) + prev.slice(3).replace(/\d(?!.*\d)/, '_');
                setCursorIndex(newValue.indexOf('_') || 4);
                return newValue;
            });
        }

        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key)) {
            setValue((prev) => {
                const newValue = prev.replace('_', event.key);
                setCursorIndex(newValue.indexOf('_') || 4);
                return newValue;
            });
        }
    };

    React.useEffect(() => {
        const focus = (): void => {
            const input = phoneInput.current;
            if (input) {
                if (input.value === '') {
                    setValue(PHONE_INIT);
                }
            }
            setTimeout(() => {
                input!.setSelectionRange(cursorPosition.current, cursorPosition.current);
            }, 0);
        };

        const blur = (): void => {
            const input = phoneInput.current;
            if (input && input.value === PHONE_INIT) {
                setValue('');
            }
        };

        const currentInput = phoneInput.current;
        currentInput?.addEventListener('focus', focus);
        currentInput?.addEventListener('blur', blur);

        return () => {
            currentInput?.removeEventListener('focus', focus);
            currentInput?.removeEventListener('blur', blur);
        };
    }, []);

    React.useEffect(() => {
        const input = phoneInput.current;
        if (input) {
            input.setSelectionRange(cursorPosition.current, cursorPosition.current);
        }
    }, [value]);

    return [value, handleKeyDown];
};
