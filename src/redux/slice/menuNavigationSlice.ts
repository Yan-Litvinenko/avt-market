import { createSlice } from '@reduxjs/toolkit';
import type { MenuNavigationSlice } from '../../interfaces/slice.interface';

const initialState: MenuNavigationSlice = {
    burgerMenuState: true,
    menuNavigationElements: [
        'В наличии',
        'Автокредит',
        'Рассрочка',
        'Выкуп',
        'Trade-In',
        'Банки',
        'Контакты',
        'О компании',
    ],
};

const menuNavigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        triggerStateBurgerMenu: (state) => {
            state.burgerMenuState = !state.burgerMenuState;
        },
    },
});

export const { triggerStateBurgerMenu } = menuNavigationSlice.actions;
export default menuNavigationSlice.reducer;
