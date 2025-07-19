import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavoriteIds } from '../../store/favorites/favorites.selectors';
import { selectUsers } from '../../store/users/users.selectors';
import { removeFavorite } from '../../store/favorites/favorites.slice';
import type { User } from '../../types/user';
import {
  FavoritesContainer,
  FavoritesHeader,
  FavoritesTitleWrapper,
  FavoritesTitle,
  FavoritesCount,
  FavoritesList,
  FavoriteItem,
  FavoriteUserInfo,
  FavoriteAvatar,
  FavoriteUserDetails,
  FavoriteUserName,
  FavoriteUserEmail,
  FavoriteCardContent,
  FavoriteInfoRow,
  FavoriteInfoIcon,
  FavoriteInfoText,
  FavoriteActions,
  FavoriteButton,
  EmptyFavorites,
  EmptyFavoritesIcon,
  EmptyFavoritesText,
  EmptyFavoritesSubtext,
  CollapseButton,
} from './styles';

export const FavoritesPanel = () => {
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

  if (favoriteUsers.length === 0) {
    return (
      <FavoritesContainer className="animate-fade-in">
        <FavoritesHeader>
          <FavoritesTitleWrapper>
            <FavoritesTitle>
              ⭐ Favoritos
              <FavoritesCount>0</FavoritesCount>
            </FavoritesTitle>
          </FavoritesTitleWrapper>
        </FavoritesHeader>
        <EmptyFavorites>
          <EmptyFavoritesIcon>💫</EmptyFavoritesIcon>
          <EmptyFavoritesText>Nenhum usuário favoritado ainda</EmptyFavoritesText>
          <EmptyFavoritesSubtext>
            Explore a lista de usuários abaixo e clique no coração para adicionar seus favoritos aqui.
          </EmptyFavoritesSubtext>
        </EmptyFavorites>
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer className="animate-fade-in">
      <FavoritesHeader>
        <FavoritesTitleWrapper>
          <FavoritesTitle>
            ⭐ Favoritos
            <FavoritesCount>{favoriteUsers.length}</FavoritesCount>
          </FavoritesTitle>
        </FavoritesTitleWrapper>
        <CollapseButton
          $isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Expandir favoritos' : 'Recolher favoritos'}
        >
          {isCollapsed ? '↓' : '↑'}
        </CollapseButton>
      </FavoritesHeader>

      {!isCollapsed && (
        <FavoritesList className="animate-slide-in">
          {favoriteUsers.map((user, index) => (
            <FavoriteItem
              key={user.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fade-in"
            >
              <FavoriteUserInfo>
                <FavoriteAvatar>
                  {getInitials(user.name)}
                </FavoriteAvatar>
                <FavoriteUserDetails>
                  <FavoriteUserName onClick={() => handleViewDetails(user.id)}>
                    {user.name}
                  </FavoriteUserName>
                  <FavoriteUserEmail>{user.email}</FavoriteUserEmail>
                </FavoriteUserDetails>
              </FavoriteUserInfo>

              <FavoriteCardContent>
                <FavoriteInfoRow>
                  <FavoriteInfoIcon>📞</FavoriteInfoIcon>
                  <FavoriteInfoText>{user.phone}</FavoriteInfoText>
                </FavoriteInfoRow>
                <FavoriteInfoRow>
                  <FavoriteInfoIcon>🌐</FavoriteInfoIcon>
                  <FavoriteInfoText>{user.website}</FavoriteInfoText>
                </FavoriteInfoRow>
                <FavoriteInfoRow>
                  <FavoriteInfoIcon>🏢</FavoriteInfoIcon>
                  <FavoriteInfoText>{user.company.name}</FavoriteInfoText>
                </FavoriteInfoRow>
                <FavoriteInfoRow>
                  <FavoriteInfoIcon>📍</FavoriteInfoIcon>
                  <FavoriteInfoText>{user.address.city}, {user.address.zipcode}</FavoriteInfoText>
                </FavoriteInfoRow>
              </FavoriteCardContent>

              <FavoriteActions>
                <FavoriteButton onClick={() => handleViewDetails(user.id)}>
                  👁️ Detalhes
                </FavoriteButton>
                <FavoriteButton
                  variant="danger"
                  onClick={() => handleRemoveFavorite(user.id)}
                  title="Remover dos favoritos"
                >
                  🗑️ Remover
                </FavoriteButton>
              </FavoriteActions>
            </FavoriteItem>
          ))}
        </FavoritesList>
      )}
    </FavoritesContainer>
  );
};