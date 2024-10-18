import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ModalPromotionSlice } from '../../interfaces/slice.interface';

const initialState: ModalPromotionSlice = {
    descrption: '',
    link: '',
    modalPromotionState: false,
    title: '',
};

const modalPromotionSlice = createSlice({
    name: 'modal-promotion',
    initialState,
    reducers: {
        openPromotionModal: (state, action: PayloadAction<Omit<ModalPromotionSlice, 'modalPromotionState'>>) => {
            state.modalPromotionState = true;
            state.title = action.payload.title;
            state.descrption = action.payload.descrption;
            state.link = action.payload.link;
        },
        closePromotionModal: (state) => {
            state.modalPromotionState = false;
            state.title = '';
            state.descrption = '';
            state.link = '';
        },
    },
});

export const { openPromotionModal, closePromotionModal } = modalPromotionSlice.actions;
export default modalPromotionSlice.reducer;
