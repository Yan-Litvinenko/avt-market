import { BanksListItem } from './component.interface';
import type { ModalPromotionData, FavoritesLocalStorage, MenuElement } from './interface';

export type MenuNavigationSlice = {
    burgerMenuState: boolean;
    menuNavigationElements: MenuElement[];
};

export type ModalPromotionSlice = {
    modalPromotionState: boolean;
} & Omit<ModalPromotionData, 'img'>;

export type FavoritesSlice = {
    favoritesCount: number;
    favoritesList: FavoritesLocalStorage[];
};

export type MediaQuerySlice = {
    readonly SMALL: number;
    readonly MEDIUM: number;
    isSmall: boolean;
    isMedium: boolean;
};

export type CallbackModalSlice = {
    callbackModalState: boolean;
};

export type BanksListSlice = {
    banksList: BanksListItem[];
    stateLoad: {
        isLoad: boolean;
        error: boolean;
    };
};
