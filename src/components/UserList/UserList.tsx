import type { User } from '../../types/user';
import { UserListItem } from './UserListItem';
import {
  UserListContainer,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateSubtext,
  LoadingGrid,
  LoadingCard,
  LoadingSkeleton,
} from './styles';

interface UserListProps {
  users: User[];
  isFiltered?: boolean;
  isLoading?: boolean;
}

export const UserList: React.FC<UserListProps> = ({ 
  users, 
  isFiltered = false, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <LoadingGrid>
        {Array.from({ length: 4 }).map((_, index) => (
          <LoadingCard key={index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <LoadingSkeleton width="64px" height="64px" />
              <div style={{ flex: 1 }}>
                <LoadingSkeleton width="70%" height="24px" />
                <LoadingSkeleton width="50%" height="16px" />
              </div>
            </div>
            <LoadingSkeleton width="100%" height="16px" />
            <LoadingSkeleton width="80%" height="16px" />
            <LoadingSkeleton width="90%" height="16px" />
            <LoadingSkeleton width="60%" height="16px" />
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
              <LoadingSkeleton width="100%" height="44px" />
              <LoadingSkeleton width="60px" height="44px" />
            </div>
          </LoadingCard>
        ))}
      </LoadingGrid>
    );
  }

  if (users.length === 0) {
    return (
      <EmptyState className="animate-fade-in">
        <EmptyStateIcon>
          {isFiltered ? '🔍' : '👥'}
        </EmptyStateIcon>
        <EmptyStateText>
          {isFiltered ? 'Nenhum usuário encontrado' : 'Nenhum usuário disponível'}
        </EmptyStateText>
        <EmptyStateSubtext>
          {isFiltered 
            ? 'Tente ajustar os termos de busca para encontrar usuários. Verifique a ortografia ou use termos mais gerais.'
            : 'Aguarde o carregamento dos dados ou recarregue a página para tentar novamente.'
          }
        </EmptyStateSubtext>
      </EmptyState>
    );
  }

  return (
    <UserListContainer>
      {users.map((user, index) => (
        <UserListItem 
          key={user.id} 
          user={user} 
          index={index}
        />
      ))}
    </UserListContainer>
  );
};