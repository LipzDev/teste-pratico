import { useHomePage } from "@/hooks/useHomePage";
import { Loader } from "@/components/Shared/Loader";
import { SearchInput } from "@/components/Shared/SearchInput";
import { FavoritesPanel } from "@/components/Favorites/index";
import { Layout } from "@/components/Shared/Layout";
import * as S from "./styles";
import { UserList } from "@/components/UserList";

export const HomePage: React.FC = () => {
  const {
    users,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    handleRetry,
    filteredUsers,
  } = useHomePage();

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
        <S.ErrorMessage>
          ❌ Erro ao carregar usuários: {error}
          <br />
          <S.RetryButton onClick={handleRetry}>
            🔄 Tentar novamente
          </S.RetryButton>
        </S.ErrorMessage>
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
