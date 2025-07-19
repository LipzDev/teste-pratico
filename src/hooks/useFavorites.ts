import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavoriteIds } from '../store/favorites/favorites.selectors';
import { selectUsers } from '../store/users/users.selectors';
import { removeFavorite } from '../store/favorites/favorites.slice';
import type { User } from '../types/user';


export const useFavorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const favoriteIds = useSelector(selectFavoriteIds);
  const allUsers = useSelector(selectUsers);

  const favoriteUsers = allUsers.filter((user: User) =>
    favoriteIds.includes(user.id)
  );

  const handleViewDetails = (userId: number) => {
    navigate(`/users/${userId}`);
  };

  const handleRemoveFavorite = (userId: number) => {
    dispatch(removeFavorite(userId));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return {
    handleViewDetails,
    handleRemoveFavorite,
    getInitials,
    toggleCollapse,
    favoriteUsers,
    isCollapsed,
    favoriteIds,
    allUsers,
  };
};