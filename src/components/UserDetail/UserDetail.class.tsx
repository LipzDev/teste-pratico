import { Component } from 'react';
import { connect } from 'react-redux';
import type { NavigateFunction } from 'react-router-dom';
import type { User } from '../../types/user';
import type { RootState } from '../../store';
import { selectUsers } from '../../store/users/users.selectors';
import { selectIsFavorite } from '../../store/favorites/favorites.selectors';
import { addFavorite, removeFavorite } from '../../store/favorites/favorites.slice';
import { Loader } from '../Shared/Loader';
import {
  UserDetailContainer,
  UserDetailHeader,
  UserTitle,
  UserName,
  UserUsername,
  FavoriteButton,
  UserDetailGrid,
  DetailSection,
  SectionTitle,
  DetailItem,
  DetailLabel,
  DetailValue,
  BackButton,
  ErrorMessage,
  LoaderContainer,
} from './styles';

interface UserDetailProps {
  userId: number;
  navigate: NavigateFunction;
  users: User[];
  isFavorite: boolean;
  addFavorite: (userId: number) => void;
  removeFavorite: (userId: number) => void;
}

interface UserDetailState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

class UserDetailClass extends Component<UserDetailProps, UserDetailState> {
  constructor(props: UserDetailProps) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate(prevProps: UserDetailProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadUser();
    }
  }

  loadUser = () => {
    const { userId, users } = this.props;

    this.setState({ loading: true, error: null });

    const user = users.find(u => u.id === userId);

    if (user) {
      this.setState({
        user,
        loading: false,
        error: null,
      });
    } else {
      this.setState({
        user: null,
        loading: false,
        error: 'Usuário não encontrado',
      });
    }
  };

  handleBack = () => {
    this.props.navigate('/');
  };

  handleToggleFavorite = () => {
    const { userId, isFavorite, addFavorite, removeFavorite } = this.props;

    if (isFavorite) {
      removeFavorite(userId);
    } else {
      addFavorite(userId);
    }
  };

  renderContactInfo = (user: User) => (
    <DetailSection>
      <SectionTitle>📞 Informações de Contato</SectionTitle>
      <DetailItem>
        <DetailLabel>Email:</DetailLabel>
        <DetailValue>{user.email}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Telefone:</DetailLabel>
        <DetailValue>{user.phone}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Website:</DetailLabel>
        <DetailValue>{user.website}</DetailValue>
      </DetailItem>
    </DetailSection>
  );

  renderAddressInfo = (user: User) => (
    <DetailSection>
      <SectionTitle>🏠 Endereço</SectionTitle>
      <DetailItem>
        <DetailLabel>Rua:</DetailLabel>
        <DetailValue>{user.address.street}, {user.address.suite}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Cidade:</DetailLabel>
        <DetailValue>{user.address.city}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>CEP:</DetailLabel>
        <DetailValue>{user.address.zipcode}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Coordenadas:</DetailLabel>
        <DetailValue>
          Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
        </DetailValue>
      </DetailItem>
    </DetailSection>
  );

  renderCompanyInfo = (user: User) => (
    <DetailSection>
      <SectionTitle>🏢 Empresa</SectionTitle>
      <DetailItem>
        <DetailLabel>Nome:</DetailLabel>
        <DetailValue>{user.company.name}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Slogan:</DetailLabel>
        <DetailValue>{user.company.catchPhrase}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Área de Negócio:</DetailLabel>
        <DetailValue>{user.company.bs}</DetailValue>
      </DetailItem>
    </DetailSection>
  );

  render() {
    const { loading, error, user } = this.state;
    const { isFavorite } = this.props;

    if (loading) {
      return (
        <LoaderContainer>
          <Loader text="Carregando detalhes do usuário..." />
        </LoaderContainer>
      );
    }

    if (error) {
      return (
        <>
          <BackButton onClick={this.handleBack}>
            ← Voltar para Lista
          </BackButton>
          <ErrorMessage>
            ❌ {error}
          </ErrorMessage>
        </>
      );
    }

    if (!user) {
      return (
        <>
          <BackButton onClick={this.handleBack}>
            ← Voltar para Lista
          </BackButton>
          <ErrorMessage>
            ❌ Usuário não encontrado
          </ErrorMessage>
        </>
      );
    }

    return (
      <>
        <BackButton onClick={this.handleBack}>
          ← Voltar para Lista
        </BackButton>

        <UserDetailContainer>
          <UserDetailHeader>
            <UserTitle>
              <UserName>{user.name}</UserName>
              <UserUsername>@{user.username}</UserUsername>
            </UserTitle>
            <FavoriteButton
              isFavorite={isFavorite}
              onClick={this.handleToggleFavorite}
            >
              {isFavorite ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos'}
            </FavoriteButton>
          </UserDetailHeader>

          <UserDetailGrid>
            {this.renderContactInfo(user)}
            {this.renderAddressInfo(user)}
            {this.renderCompanyInfo(user)}
          </UserDetailGrid>
        </UserDetailContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: { userId: number }) => ({
  users: selectUsers(state),
  isFavorite: selectIsFavorite(ownProps.userId)(state),
});

const mapDispatchToProps = {
  addFavorite,
  removeFavorite,
};

export const UserDetail = connect(mapStateToProps, mapDispatchToProps)(UserDetailClass);