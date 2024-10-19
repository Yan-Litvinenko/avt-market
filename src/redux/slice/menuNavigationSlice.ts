import { createSlice } from '@reduxjs/toolkit';
import type { MenuNavigationSlice } from '../../interfaces/slice.interface';

const initialState: MenuNavigationSlice = {
    burgerMenuState: false,
    menuNavigationElements: [
        {
            name: 'В наличии',
            link: '/cars',
        },
        {
            name: 'Автокредит',
            link: '/credit',
        },
        {
            name: 'Рассрочка',
            link: '/installment',
        },
        {
            name: 'Выкуп',
            link: '/buyout',
        },
        {
            name: 'Trade-In',
            link: '/exchange',
        },
        {
            name: 'Банки',
            link: '/banks',
        },
        {
            name: 'Контакты',
            link: '/contacts',
        },
        {
            name: 'О компании',
            link: '/about',
        },
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
