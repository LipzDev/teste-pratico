# Lista de Usuários - Teste prático.

Uma Single Page Application desenvolvida em React + TypeScript que consome a API pública JSONPlaceholder para listar usuários, permitir busca, exibir detalhes e gerenciar favoritos usando Redux + Redux Saga.

### Funcionalidades

- ✅ **Listagem de Usuários**: Exibe todos os usuários com name, email e phone
- ✅ **Busca/Filtro**: Filtro por nome (case-insensitive) em memória
- ✅ **Detalhes do Usuário**: Exibe address, company e demais campos em página dedicada
- ✅ **Favoritos**: Adicionar/remover usuários dos favoritos com persistência em memória
- ✅ **Loading States**: Indicadores visuais durante carregamento
- ✅ **Error Handling**: Estados de erro com opção de retry
- ✅ **Responsive Design**: Interface adaptativa para diferentes dispositivos

### Stack

- **TypeScript**: Tipagem completa da aplicação
- **React**: Componentes funcionais
- **Styled Components**: Estilização com tema customizado
- **Redux + Redux Saga**: Gerenciamento de estado e fluxos assíncronos
- **React Router**: Navegação entre páginas

### Complementares

- **Vite**: Build tool e servidor de desenvolvimento
- **Redux Toolkit**: Simplificação do Redux com melhor tipagem

## Setup e Instalação

- Node.js (versão 16 ou superior)
- npm ou yarn

```bash
# Clone ou baixe o projeto
cd users-spa

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

A aplicação estará disponível em: `http://localhost:5173/`

## 📁 Arquitetura do Projeto

```
src/
├── services/             # Serviços e APIs
│   └── api/             # Serviços de API
│       └── users.api.ts # Fetch de usuários do JSONPlaceholder
├── store/               # Redux Store
│   ├── index.ts         # Configuração principal da store
│   ├── rootReducer.ts   # Combinação de reducers
│   ├── rootSaga.ts      # Combinação de sagas
│   ├── users/           # Módulo de usuários
│   │   ├── users.slice.ts     # Actions, reducer (Redux Toolkit)
│   │   ├── users.sagas.ts     # Saga para fetch assíncrono
│   │   ├── users.selectors.ts # Seletores para acesso ao estado
│   │   └── users.types.ts     # Tipos específicos do módulo
│   └── favorites/       # Módulo de favoritos
│       ├── favorites.slice.ts     # Actions, reducer para favoritos
│       └── favorites.selectors.ts # Seletores de favoritos
├── components/          # Componentes reutilizáveis
│   ├── UserList/        # Lista de usuários
│   │   ├── index.tsx    # Lista principal (funcional)
│   │   └── styles.ts    # Estilos específicos
│   ├── UserListItem/    # Item da lista
│   │   ├── index.tsx    # Item individual (funcional)
│   │   └── styles.ts    # Estilos do item
│   ├── UserDetail/      # Detalhes do usuário
│   │   ├── index.tsx    # Componente funcional
│   │   └── styles.ts    # Estilos do detalhe
│   ├── Favorites/       # Painel de favoritos
│   │   ├── index.tsx    # Gerenciamento de favoritos
│   │   └── styles.ts    # Estilos dos favoritos
│   └── Shared/          # Componentes compartilhados
│       ├── Layout/           # Layout principal
│       │   ├── index.tsx     # Layout principal
│       │   └── styles.ts     # Estilos do layout
│       ├── Loader/           # Indicador de carregamento
│       │   ├── index.tsx     # Componente de loading
│       │   └── styles.ts     # Estilos do loader
│       └── SearchInput/      # Campo de busca
│           ├── index.tsx     # Campo de busca
│           └── styles.ts     # Estilos do campo
├── pages/               # Páginas da aplicação
│   ├── HomePage/        # Página principal
│   │   ├── index.tsx    # Lista + busca + favoritos
│   │   └── styles.ts    # Estilos da página
│   └── UserDetailPage/  # Página de detalhes
│       ├── index.tsx    # Página de detalhes do usuário
│       └── styles.ts    # Estilos da página
├── hooks/               # Custom hooks
│   ├── useHomePage.ts       # Lógica da página inicial
│   ├── useUserDetail.ts     # Lógica dos detalhes do usuário
│   ├── useUserDetailPage.ts # Lógica da página de detalhes│
│   └── useFavoritesPanel.ts # Lógica do painel de favoritos
├── styles/              # Tema e estilos globais
│   ├── theme.ts             # Definições do tema
│   └── global.ts            # Estilos globais
├── types/               # Tipagens TypeScript
│   ├── user.ts              # Interfaces User, Address, Company, Geo
│   └── styled.d.ts          # Extensão de tipos do styled-components
├── assets/              # Recursos estáticos
│   └── react.svg            # Logo do React
├── App.tsx              # Componente raiz da aplicação
├── main.tsx             # Ponto de entrada da aplicação
└── vite-env.d.ts        # Tipos do Vite
```

### Atribuições

- **Redux**: Gerenciamento de estado previsível e centralizado
- **Saga**: Controle fino sobre efeitos colaterais e fluxos assíncronos
- **Custom Hooks**: Separação de lógica de negócio dos componentes
- **Separação de responsabilidades**: Componentes focam em apresentação, hooks lidam com lógica

### Estrutura de Pastas

- **Modular**: Cada feature tem sua própria pasta (users, favorites)
- **Componentes organizados**: Cada componente tem sua pasta com index.tsx e styles.ts
- **Hooks customizados**: Lógica de negócio separada em hooks reutilizáveis
- **Separação de concerns**: Services, store, components, pages claramente divididos
- **Colocação**: Arquivos relacionados ficam próximos (slice + saga + selectors)

### Styled Components + Tema

- **CSS-in-JS**: Estilos encapsulados e dinâmicos
- **Tema centralizado**: Cores, espaçamentos e outros tokens reutilizáveis
- **TypeScript**: Tipagem completa do tema para autocomplete

### Responsividade

- **Mobile-first**: Design adaptativo para telas pequenas
- **Breakpoints**: sm(576px), md(768px), lg(992px), xl(1200px)
- **Grid flexível**: Lista de usuários se adapta ao espaço disponível
- **Touch-friendly**: Botões e áreas clicáveis dimensionadas adequadamente

### Componente de Classe - UserDetailPage

### 📋 **Descrição Técnica**

O `UserDetailPage` é o **único componente de classe** da aplicação, implementado como demonstração de compatibilidade entre padrões modernos e legados do React.

### **Implementação Detalhada**

```typescript
class UserDetailPageClass extends Component<UserDetailPageProps, UserDetailPageState> {
  constructor(props: UserDetailPageProps) {
    super(props);
    this.state = {
      userId: null
    };
  }

  componentDidMount() {
    this.validateAndSetUserId();
  }

  componentDidUpdate(prevProps: UserDetailPageProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.validateAndSetUserId();
    }
  }

  validateAndSetUserId = () => {
    const { id } = this.props.params;
    const userId = id ? parseInt(id, 10) : 0;

    if (!id || isNaN(userId)) {
      this.props.navigate('/');
      return;
    }

    this.setState({ userId });
  };

  render() {
    const { userId } = this.state;
    if (!userId) return null;

    return (
      <Layout title="Detalhes do Usuário">
        <UserDetail />
      </Layout>
    );
  }
}
```

### **Características Técnicas**

#### **1. Lifecycle Methods**

- **`constructor`**: Inicialização do estado com `userId: null`
- **`componentDidMount`**: Validação inicial do parâmetro da URL
- **`componentDidUpdate`**: Re-validação quando o ID da URL muda
- **`render`**: Renderização condicional baseada no estado

#### **2. Gerenciamento de Estado**

```typescript
interface UserDetailPageState {
  userId: number | null;
}
```

- **Estado local** para armazenar o ID do usuário validado
- **Validação** do parâmetro da URL antes de renderizar
- **Navegação automática** para home se ID inválido

#### **3. Integração com React Router**

```typescript
// HOC para compatibilidade com React Router v6
const withRouter = (Component: any) => {
  return (props: any) => {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  };
};
```

- **HOC customizado** para injetar props do React Router
- **Compatibilidade** com React Router v6 em componente de classe
- **Injeção** de `params` e `navigate` como props

### **Uso na Aplicação**

```typescript
// Rota configurada no App.tsx
<Route path="/users/:id" element={<UserDetailPage />} />

// Acesso via URL
http://localhost:5173/users/4
```
