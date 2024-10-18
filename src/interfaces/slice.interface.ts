import type { ModalPromotionData } from './interface';

export type MenuNavigationSlice = {
    burgerMenuState: boolean;
    menuNavigationElements: string[];
};

export type ModalPromotionSlice = {
    modalPromotionState: boolean;
} & Omit<ModalPromotionData, 'img'>;
