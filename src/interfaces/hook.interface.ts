export type UseNumberPhoneProps = {
    phoneInput: React.MutableRefObject<HTMLInputElement | null>;
};

export type UseNumberPhone = [string, (event: React.KeyboardEvent<HTMLInputElement>) => void];
