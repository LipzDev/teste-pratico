import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../store/users/users.slice';
import { selectUsers, selectUsersLoading, selectUsersError } from '../store/users/users.selectors';
import { Layout } from '../components/Shared/Layout';
import { Loader } from '../components/Shared/Loader';
import { SearchInput } from '../components/Shared/SearchInput';
import { UserList } from '../components/UserList/UserList';
import { FavoritesPanel } from '../components/Favorites/FavoritesPanel';
import type { User } from '../types/user';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.danger};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing.md};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (users.length === 0 && !loading && !error) {
      dispatch(fetchUsersRequest());
    }
  }, [dispatch, users.length, loading, error]);

  const handleRetry = () => {
    dispatch(fetchUsersRequest());
  };

  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && users.length === 0) {
    return (
      <Layout>
        <Loader text="Carregando usuários..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <ErrorMessage>
          ❌ Erro ao carregar usuários: {error}
          <br />
          <RetryButton onClick={handleRetry}>
            🔄 Tentar novamente
          </RetryButton>
        </ErrorMessage>
      </Layout>
    );
  }

  return (
    <Layout>
      <FavoritesPanel />
      
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Digite o nome do usuário..."
        label="🔍 Buscar usuário por nome:"
      />
      
      <UserList 
        users={filteredUsers} 
        isFiltered={searchTerm.length > 0}
        isLoading={loading}
      />
    </Layout>
  );
};