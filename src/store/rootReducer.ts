import { combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './users/users.slice';
import { favoritesReducer } from './favorites/favorites.slice';

export const rootReducer = combineReducers({
  users: usersReducer,
  favorites: favoritesReducer,
});
