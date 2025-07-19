import { useFavoritesPanel } from "@/hooks/useFavoritesPanel";
import * as S from "@/components/Favorites/styles";

export const FavoritesPanel = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    favoriteUsers,
    handleViewDetails,
    handleRemoveFavorite,
    getInitials,
  } = useFavoritesPanel();

  if (favoriteUsers.length === 0) {
    return (
      <S.FavoritesContainer className="animate-fade-in">
        <S.FavoritesHeader>
          <S.FavoritesTitleWrapper>
            <S.FavoritesTitle>
              ⭐ Favoritos
              <S.FavoritesCount>0</S.FavoritesCount>
            </S.FavoritesTitle>
          </S.FavoritesTitleWrapper>
        </S.FavoritesHeader>
        <S.EmptyFavorites>
          <S.EmptyFavoritesIcon>💫</S.EmptyFavoritesIcon>
          <S.EmptyFavoritesText>
            Nenhum usuário favoritado ainda
          </S.EmptyFavoritesText>
          <S.EmptyFavoritesSubtext>
            Explore a lista de usuários abaixo e clique no coração para
            adicionar seus favoritos aqui.
          </S.EmptyFavoritesSubtext>
        </S.EmptyFavorites>
      </S.FavoritesContainer>
    );
  }

  return (
    <S.FavoritesContainer className="animate-fade-in">
      <S.FavoritesHeader>
        <S.FavoritesTitleWrapper>
          <S.FavoritesTitle>
            ⭐ Favoritos
            <S.FavoritesCount>{favoriteUsers.length}</S.FavoritesCount>
          </S.FavoritesTitle>
        </S.FavoritesTitleWrapper>
        <S.CollapseButton
          $isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expandir favoritos" : "Recolher favoritos"}
        >
          {isCollapsed ? "↓" : "↑"}
        </S.CollapseButton>
      </S.FavoritesHeader>

      {!isCollapsed && (
        <S.FavoritesList className="animate-slide-in">
          {favoriteUsers.map((user, index) => (
            <S.FavoriteItem
              key={user.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fade-in"
            >
              <S.FavoriteUserInfo>
                <S.FavoriteAvatar>{getInitials(user.name)}</S.FavoriteAvatar>
                <S.FavoriteUserDetails>
                  <S.FavoriteUserName
                    onClick={() => handleViewDetails(user.id)}
                  >
                    {user.name}
                  </S.FavoriteUserName>
                  <S.FavoriteUserEmail>{user.email}</S.FavoriteUserEmail>
                </S.FavoriteUserDetails>
              </S.FavoriteUserInfo>

              <S.FavoriteCardContent>
                <S.FavoriteInfoRow>
                  <S.FavoriteInfoIcon>📞</S.FavoriteInfoIcon>
                  <S.FavoriteInfoText>{user.phone}</S.FavoriteInfoText>
                </S.FavoriteInfoRow>
                <S.FavoriteInfoRow>
                  <S.FavoriteInfoIcon>🌐</S.FavoriteInfoIcon>
                  <S.FavoriteInfoText>{user.website}</S.FavoriteInfoText>
                </S.FavoriteInfoRow>
                <S.FavoriteInfoRow>
                  <S.FavoriteInfoIcon>🏢</S.FavoriteInfoIcon>
                  <S.FavoriteInfoText>{user.company.name}</S.FavoriteInfoText>
                </S.FavoriteInfoRow>
                <S.FavoriteInfoRow>
                  <S.FavoriteInfoIcon>📍</S.FavoriteInfoIcon>
                  <S.FavoriteInfoText>
                    {user.address.city}, {user.address.zipcode}
                  </S.FavoriteInfoText>
                </S.FavoriteInfoRow>
              </S.FavoriteCardContent>

              <S.FavoriteActions>
                <S.FavoriteButton onClick={() => handleViewDetails(user.id)}>
                  👁️ Detalhes
                </S.FavoriteButton>
                <S.FavoriteButton
                  variant="danger"
                  onClick={() => handleRemoveFavorite(user.id)}
                  title="Remover dos favoritos"
                >
                  🗑️ Remover
                </S.FavoriteButton>
              </S.FavoriteActions>
            </S.FavoriteItem>
          ))}
        </S.FavoritesList>
      )}
    </S.FavoritesContainer>
  );
};
