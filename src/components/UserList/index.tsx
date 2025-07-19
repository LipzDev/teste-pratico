import { Search, Users } from "lucide-react";
import type { IUser } from "@/types/user";
import { UserListItem } from "../UserListItem";
import * as S from "./styles";

interface UserListProps {
  users: IUser[];
  isFiltered?: boolean;
  isLoading?: boolean;
}

export const UserList: React.FC<UserListProps> = ({
  users,
  isFiltered = false,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <S.LoadingGrid>
        {Array.from({ length: 4 }).map((_, index) => (
          <S.LoadingCard key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <S.LoadingSkeleton width="64px" height="64px" />
              <div style={{ flex: 1 }}>
                <S.LoadingSkeleton width="70%" height="24px" />
                <S.LoadingSkeleton width="50%" height="16px" />
              </div>
            </div>
            <S.LoadingSkeleton width="100%" height="16px" />
            <S.LoadingSkeleton width="80%" height="16px" />
            <S.LoadingSkeleton width="90%" height="16px" />
            <S.LoadingSkeleton width="60%" height="16px" />
            <div
              style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem" }}
            >
              <S.LoadingSkeleton width="100%" height="44px" />
              <S.LoadingSkeleton width="60px" height="44px" />
            </div>
          </S.LoadingCard>
        ))}
      </S.LoadingGrid>
    );
  }

  if (users.length === 0) {
    return (
      <S.EmptyState className="animate-fade-in">
        <S.EmptyStateIcon>
          {isFiltered ? <Search size={48} /> : <Users size={48} />}
        </S.EmptyStateIcon>
        <S.EmptyStateText>
          {isFiltered
            ? "Nenhum usuário encontrado"
            : "Nenhum usuário disponível"}
        </S.EmptyStateText>
        <S.EmptyStateSubtext>
          {isFiltered
            ? "Tente ajustar os termos de busca para encontrar usuários. Verifique a ortografia ou use termos mais gerais."
            : "Aguarde o carregamento dos dados ou recarregue a página para tentar novamente."}
        </S.EmptyStateSubtext>
      </S.EmptyState>
    );
  }

  return (
    <S.UserListContainer>
      {users.map((user, index) => (
        <UserListItem key={user.id} user={user} index={index} />
      ))}
    </S.UserListContainer>
  );
};
