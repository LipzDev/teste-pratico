import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, Building, MapPin, Eye, Heart } from "lucide-react";
import type { IUser } from "@/types/user";
import { selectIsFavorite } from "@/store/favorites/favorites.selectors";
import { addFavorite, removeFavorite } from "@/store/favorites/favorites.slice";
import type { RootState } from "@/store";
import * as S from "./styles";

interface UserListItemProps {
  user: IUser;
  index?: number;
}

export const UserListItem: React.FC<UserListItemProps> = ({
  user,
  index = 0,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavorite = useSelector((state: RootState) =>
    selectIsFavorite(user.id)(state),
  );

  const handleViewDetails = () => {
    navigate(`/users/${user.id}`);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(user.id));
    } else {
      dispatch(addFavorite(user.id));
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
  };

  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length >= 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
    return phone;
  };

  return (
    <S.UserCard
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <S.UserHeader>
        <S.UserAvatar>{getInitials(user.name)}</S.UserAvatar>
        <S.UserInfo>
          <S.UserName onClick={handleViewDetails} title={user.name}>
            {user.name}
          </S.UserName>
        </S.UserInfo>
      </S.UserHeader>

      <S.UserDetails>
        <S.UserDetail>
          <S.DetailIcon>
            <Mail size={16} />
          </S.DetailIcon>
          <S.DetailText title={user.email}>{user.email}</S.DetailText>
        </S.UserDetail>
        <S.UserDetail>
          <S.DetailIcon>
            <Phone size={16} />
          </S.DetailIcon>
          <S.DetailText title={user.phone}>
            {formatPhone(user.phone)}
          </S.DetailText>
        </S.UserDetail>
        <S.UserDetail>
          <S.DetailIcon>
            <Building size={16} />
          </S.DetailIcon>
          <S.DetailText title={user.company.name}>
            {user.company.name}
          </S.DetailText>
        </S.UserDetail>
        <S.UserDetail>
          <S.DetailIcon>
            <MapPin size={16} />
          </S.DetailIcon>
          <S.DetailText title={`${user.address.city}, ${user.address.zipcode}`}>
            {user.address.city}
          </S.DetailText>
        </S.UserDetail>
      </S.UserDetails>

      <S.ActionsContainer>
        <S.ActionButton onClick={handleViewDetails}>
          <Eye size={16} style={{ marginRight: "4px" }} />
          Ver Detalhes
        </S.ActionButton>
        <S.ActionButton
          variant={isFavorite ? "danger" : "secondary"}
          onClick={handleToggleFavorite}
          title={
            isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
        >
          <S.FavoriteIcon $isFavorite={isFavorite}>
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </S.FavoriteIcon>
        </S.ActionButton>
      </S.ActionsContainer>
    </S.UserCard>
  );
};
