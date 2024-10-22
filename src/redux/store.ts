import menuNavigationSlice from './slice/menuNavigationSlice';
import modalPromotionSlice from './slice/modalPromotionSlice';
import mediaQuerySlice from './slice/mediaQuerySlice';
import favoritesSlice from './slice/favoritesSlice';
import callbackModalSlice from './slice/callbackModalSlice';
import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        menuNavigation: menuNavigationSlice,
        modalCallback: callbackModalSlice,
        modalPromotion: modalPromotionSlice,
        favorites: favoritesSlice,
        mediaQuery: mediaQuerySlice,
    },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
