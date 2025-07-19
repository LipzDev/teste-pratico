import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../types/user';
import { selectIsFavorite } from '../../store/favorites/favorites.selectors';
import { addFavorite, removeFavorite } from '../../store/favorites/favorites.slice';
import type { RootState } from '../../store';
import {
  UserCard,
  UserHeader,
  UserAvatar,
  UserInfo,
  UserName,
  UserDetails,
  UserDetail,
  DetailIcon,
  DetailText,
  ActionsContainer,
  ActionButton,
  FavoriteIcon,
} from './styles';

interface UserListItemProps {
  user: User;
  index?: number;
}

export const UserListItem: React.FC<UserListItemProps> = ({ user, index = 0 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavorite = useSelector((state: RootState) => selectIsFavorite(user.id)(state));

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
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length >= 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
    return phone;
  };

  return (
    <UserCard 
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <UserHeader>
        <UserAvatar>
          {getInitials(user.name)}
        </UserAvatar>
        <UserInfo>
          <UserName onClick={handleViewDetails} title={user.name}>
            {user.name}
          </UserName>
        </UserInfo>
      </UserHeader>

      <UserDetails>
        <UserDetail>
          <DetailIcon>📧</DetailIcon>
          <DetailText title={user.email}>{user.email}</DetailText>
        </UserDetail>
        <UserDetail>
          <DetailIcon>📞</DetailIcon>
          <DetailText title={user.phone}>{formatPhone(user.phone)}</DetailText>
        </UserDetail>
        <UserDetail>
          <DetailIcon>🏢</DetailIcon>
          <DetailText title={user.company.name}>{user.company.name}</DetailText>
        </UserDetail>
        <UserDetail>
          <DetailIcon>📍</DetailIcon>
          <DetailText title={`${user.address.city}, ${user.address.zipcode}`}>
            {user.address.city}
          </DetailText>
        </UserDetail>
      </UserDetails>

      <ActionsContainer>
        <ActionButton onClick={handleViewDetails}>
          👁️ Ver Detalhes
        </ActionButton>
        <ActionButton
          variant={isFavorite ? 'danger' : 'secondary'}
          onClick={handleToggleFavorite}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <FavoriteIcon $isFavorite={isFavorite}>
            {isFavorite ? '❤️' : '🤍'}
          </FavoriteIcon>
        </ActionButton>
      </ActionsContainer>
    </UserCard>
  );
};