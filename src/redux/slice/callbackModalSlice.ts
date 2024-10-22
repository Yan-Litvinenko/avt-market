import { createSlice } from '@reduxjs/toolkit';
import type { CallbackModalSlice } from '../../interfaces/slice.interface';

const initialState: CallbackModalSlice = {
    callbackModalState: false,
};

const callbackModalSlice = createSlice({
    name: 'callback-modal',
    initialState,
    reducers: {
        callbackModalTrigger: (state) => {
            state.callbackModalState = !state.callbackModalState;
        },
    },
});

export const { callbackModalTrigger } = callbackModalSlice.actions;
export default callbackModalSlice.reducer;
