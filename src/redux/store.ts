import menuNavigationSlice from './slice/menuNavigationSlice';
import modalPromotionSlice from './slice/modalPromotionSlice';
import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        menuNavigation: menuNavigationSlice,
        ModalPromotion: modalPromotionSlice,
    },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
