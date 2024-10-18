import type { RootState } from './store';

export const menuNavigationSelector = (state: RootState) => state.menuNavigation;
export const modalPromotionSelector = (state: RootState) => state.ModalPromotion;
