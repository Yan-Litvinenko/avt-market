import type { ModalPromotionData, FavoritesLocalStorage } from './interface';

export type MenuNavigationSlice = {
    burgerMenuState: boolean;
    menuNavigationElements: string[];
};

export type ModalPromotionSlice = {
    modalPromotionState: boolean;
} & Omit<ModalPromotionData, 'img'>;

export type FavoritesSlice = {
    favoritesCount: number;
    favoritesList: FavoritesLocalStorage[];
};
