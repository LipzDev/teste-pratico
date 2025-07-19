# Lista de Usuários - SPA

Uma Single Page Application desenvolvida em React + TypeScript que consome a API pública JSONPlaceholder para listar usuários, permitir busca, exibir detalhes e gerenciar favoritos usando Redux + Redux Saga.

## 🎯 Funcionalidades

- ✅ **Listagem de Usuários**: Exibe todos os usuários com name, email e phone
- ✅ **Busca/Filtro**: Filtro por nome (case-insensitive) em memória
- ✅ **Detalhes do Usuário**: Exibe address, company e demais campos em página dedicada
- ✅ **Favoritos**: Adicionar/remover usuários dos favoritos com persistência em memória
- ✅ **Loading States**: Indicadores visuais durante carregamento
- ✅ **Error Handling**: Estados de erro com opção de retry
- ✅ **Responsive Design**: Interface adaptativa para diferentes dispositivos

## 🧱 Stack Tecnológica

### Obrigatórias (Conforme Especificação)
- **TypeScript**: Tipagem completa da aplicação
- **React**: Componentes funcionais + 1 componente de classe (UserDetail)
- **Styled Components**: Estilização com tema customizado
- **Redux + Redux Saga**: Gerenciamento de estado e fluxos assíncronos
- **React Router**: Navegação entre páginas

### Complementares
- **Vite**: Build tool e servidor de desenvolvimento
- **Redux Toolkit**: Simplificação do Redux com melhor tipagem

## 🚀 Setup e Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
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
├── api/                    # Serviços de API
│   └── users.api.ts       # Fetch de usuários do JSONPlaceholder
├── store/                 # Redux Store
│   ├── index.ts          # Configuração principal da store
│   ├── rootReducer.ts    # Combinação de reducers
│   ├── rootSaga.ts       # Combinação de sagas
│   ├── users/            # Módulo de usuários
│   │   ├── users.slice.ts     # Actions, reducer (Redux Toolkit)
│   │   ├── users.sagas.ts     # Saga para fetch assíncrono
│   │   └── users.selectors.ts # Seletores para acesso ao estado
│   └── favorites/        # Módulo de favoritos
│       ├── favorites.slice.ts     # Actions, reducer para favoritos
│       └── favorites.selectors.ts # Seletores de favoritos
├── components/           # Componentes reutilizáveis
│   ├── UserList/        # Lista de usuários
│   │   ├── UserList.tsx      # Lista principal (funcional)
│   │   ├── UserListItem.tsx  # Item da lista (funcional)
│   │   └── styles.ts         # Estilos específicos
│   ├── UserDetail/      # Detalhes do usuário
│   │   ├── UserDetail.class.tsx # Componente de CLASSE (obrigatório)
│   │   └── styles.ts            # Estilos do detalhe
│   ├── Favorites/       # Painel de favoritos
│   │   ├── FavoritesPanel.tsx # Gerenciamento de favoritos
│   │   └── styles.ts          # Estilos dos favoritos
│   └── Shared/          # Componentes compartilhados
│       ├── Layout.tsx        # Layout principal
│       ├── Loader.tsx        # Indicador de carregamento
│       └── SearchInput.tsx   # Campo de busca
├── pages/               # Páginas da aplicação
│   ├── HomePage.tsx          # Lista + busca + favoritos
│   └── UserDetailPage.tsx    # Página de detalhes
├── styles/              # Tema e estilos globais
│   ├── theme.ts              # Definições do tema
│   └── global.ts             # Estilos globais
└── types/               # Tipagens TypeScript
    ├── user.ts               # Interfaces User, Address, Company, Geo
    └── styled.d.ts           # Extensão de tipos do styled-components
```

## 🏗️ Decisões Arquiteturais

### Por que Redux + Saga?
- **Redux**: Gerenciamento de estado previsível e centralizado
- **Saga**: Controle fino sobre efeitos colaterais e fluxos assíncronos
- **Separação de responsabilidades**: Componentes focam em apresentação, sagas lidam com lógica assíncrona
- **Testabilidade**: Sagas são facilmente testáveis com generators

### Estrutura de Pastas
- **Modular**: Cada feature tem sua própria pasta (users, favorites)
- **Separação de concerns**: API, store, components, pages claramente divididos
- **Colocação**: Arquivos relacionados ficam próximos (slice + saga + selectors)

### Styled Components + Tema
- **CSS-in-JS**: Estilos encapsulados e dinâmicos
- **Tema centralizado**: Cores, espaçamentos e outros tokens reutilizáveis
- **TypeScript**: Tipagem completa do tema para autocomplete

### Componente de Classe
- **UserDetail**: Implementado como classe conforme especificação
- **Lifecycle methods**: Demonstra uso de componentDidMount e componentDidUpdate
- **Connect pattern**: Usa react-redux connect para demonstrar padrão clássico

## 🔄 Fluxo de Dados

1. **Inicialização**: App carrega → dispatch `fetchUsersRequest()`
2. **Saga**: Intercepta action → chama API → dispatch success/failure
3. **Reducer**: Atualiza estado com dados ou erro
4. **Componentes**: Reagem às mudanças via selectors
5. **Favoritos**: Gerenciados localmente no Redux (sem persistência)

## 🎨 Extensibilidade

### Adicionando Nova Feature (ex: Posts)
```bash
# 1. Criar estrutura
mkdir src/store/posts
touch src/store/posts/posts.slice.ts
touch src/store/posts/posts.sagas.ts
touch src/store/posts/posts.selectors.ts

# 2. Implementar slice + saga (similar aos users)
# 3. Adicionar ao rootReducer e rootSaga
# 4. Criar componentes + página
# 5. Adicionar rota no App.tsx
```

### Adicionando Persistência
```typescript
// Instalar: npm install redux-persist
// Configurar persistência no store/index.ts
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
```

### Testes
```bash
# Instalar dependências de teste
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Estrutura sugerida:
# src/__tests__/store/  (reducers, selectors, sagas)
# src/__tests__/components/  (componentes)
# src/__tests__/integration/  (fluxos completos)
```

## 📱 Responsividade

- **Mobile-first**: Design adaptativo para telas pequenas
- **Breakpoints**: sm(576px), md(768px), lg(992px), xl(1200px)
- **Grid flexível**: Lista de usuários se adapta ao espaço disponível
- **Touch-friendly**: Botões e áreas clicáveis dimensionadas adequadamente

## 🚀 Performance

- **Code splitting**: React.lazy() para carregamento sob demanda
- **Memoização**: Selectors otimizados para evitar re-renders
- **Bundle optimization**: Vite tree-shaking automático
- **API caching**: Busca única, filtragem em memória

## 🔧 Comandos Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run lint       # Linting (se configurado)
npm run type-check # Verificação de tipos
```

## ⚡ Próximos Passos

- [ ] **Testes unitários**: Jest + Testing Library
- [ ] **Dark mode**: Toggle de tema escuro/claro
- [ ] **Paginação**: Para grandes volumes de dados
- [ ] **PWA**: Service Worker + manifest
- [ ] **Internacionalização**: i18n para múltiplos idiomas
- [ ] **Persistência**: LocalStorage ou IndexedDB
- [ ] **Cache inteligente**: React Query ou SWR

---

**Desenvolvido com ❤️ usando React + TypeScript + Redux Saga**