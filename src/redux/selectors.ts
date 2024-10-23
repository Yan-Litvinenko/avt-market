import type { RootState } from './store';

export const menuNavigationSelector = (state: RootState) => state.menuNavigation;
export const modalPromotionSelector = (state: RootState) => state.modalPromotion;
export const modalCallbackSelector = (state: RootState) => state.modalCallback;
export const favoritesSelector = (state: RootState) => state.favorites;
export const mediaQuerySelector = (state: RootState) => state.mediaQuery;
export const banksListSelector = (state: RootState) => state.banksList;
