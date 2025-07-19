import { useUserDetail } from "@/hooks/useUserDetail";
import type { IUser } from "@/types/user";
import * as S from "./styles";
import { Loader } from "../Shared/Loader";

const renderContactInfo = (user: IUser) => (
  <S.DetailSection>
    <S.SectionTitle>📞 Informações de Contato</S.SectionTitle>
    <S.DetailItem>
      <S.DetailLabel>Email:</S.DetailLabel>
      <S.DetailValue>{user.email}</S.DetailValue>
    </S.DetailItem>
    <S.DetailItem>
      <S.DetailLabel>Telefone:</S.DetailLabel>
      <S.DetailValue>{user.phone}</S.DetailValue>
    </S.DetailItem>
    <S.DetailItem>
      <S.DetailLabel>Website:</S.DetailLabel>
      <S.DetailValue>{user.website}</S.DetailValue>
    </S.DetailItem>
  </S.DetailSection>
);

const renderAddressInfo = (user: IUser) => (
  <S.DetailSection>
    <S.SectionTitle>🏠 Endereço</S.SectionTitle>
    <S.DetailItem>
      <S.DetailLabel>Rua:</S.DetailLabel>
      <S.DetailValue>
        {user.address.street}, {user.address.suite}
      </S.DetailValue>
    </S.DetailItem>

    <S.DetailItem>
      <S.DetailLabel>Cidade:</S.DetailLabel>
      <S.DetailValue>{user.address.city}</S.DetailValue>
    </S.DetailItem>

    <S.DetailItem>
      <S.DetailLabel>CEP:</S.DetailLabel>
      <S.DetailValue>{user.address.zipcode}</S.DetailValue>
    </S.DetailItem>

    <S.DetailItem>
      <S.DetailLabel>Coordenadas:</S.DetailLabel>
      <S.DetailValue>
        Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
      </S.DetailValue>
    </S.DetailItem>
  </S.DetailSection>
);

const renderCompanyInfo = (user: IUser) => (
  <S.DetailSection>
    <S.SectionTitle>🏢 Empresa</S.SectionTitle>
    <S.DetailItem>
      <S.DetailLabel>Nome:</S.DetailLabel>
      <S.DetailValue>{user.company.name}</S.DetailValue>
    </S.DetailItem>

    <S.DetailItem>
      <S.DetailLabel>Slogan:</S.DetailLabel>
      <S.DetailValue>{user.company.catchPhrase}</S.DetailValue>
    </S.DetailItem>
    
    <S.DetailItem>
      <S.DetailLabel>Área de Negócio:</S.DetailLabel>
      <S.DetailValue>{user.company.bs}</S.DetailValue>
    </S.DetailItem>
  </S.DetailSection>
);

export const UserDetail = () => {
  const { user, isFavorite, handleBack, handleToggleFavorite, loading } =
    useUserDetail();

  if (loading || !user) {
    return (
      <S.LoaderContainer>
        <Loader text="Carregando detalhes do usuário..." />
      </S.LoaderContainer>
    );
  }

  return (
    <>
      <S.BackButton onClick={handleBack}>← Voltar para Lista</S.BackButton>

      <S.UserDetailContainer>
        <S.UserDetailHeader>
          <S.UserTitle>
            <S.UserName>{user.name}</S.UserName>
            <S.UserUsername>@{user.username}</S.UserUsername>
          </S.UserTitle>
          <S.FavoriteButton
            isFavorite={isFavorite}
            onClick={handleToggleFavorite}
          >
            {isFavorite
              ? "❤️ Remover dos Favoritos"
              : "🤍 Adicionar aos Favoritos"}
          </S.FavoriteButton>
        </S.UserDetailHeader>

        <S.UserDetailGrid>
          {renderContactInfo(user)}
          {renderAddressInfo(user)}
          {renderCompanyInfo(user)}
        </S.UserDetailGrid>
      </S.UserDetailContainer>
    </>
  );
};
