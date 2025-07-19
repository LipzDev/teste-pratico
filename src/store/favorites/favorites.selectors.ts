import type { RootState } from '../index';

export const selectFavoriteIds = (state: RootState) => state.favorites.ids;
export const selectIsFavorite = (userId: number) => (state: RootState) =>
  state.favorites.ids.includes(userId);