import { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Shared/Layout";
import { UserDetail } from "@/components/UserDetail";

interface UserDetailPageProps {
  params: { id: string };
  navigate: (path: string) => void;
}

interface UserDetailPageState {
  userId: number | null;
}

// HOC para injetar props do React Router
const withRouter = (WrappedComponent: typeof Component) => {
  return (props: Record<string, unknown>) => {
    const params = useParams();
    const navigate = useNavigate();
    return <WrappedComponent {...props} params={params} navigate={navigate} />;
  };
};

class UserDetailPageClass extends Component<
  UserDetailPageProps,
  UserDetailPageState
> {
  constructor(props: UserDetailPageProps) {
    super(props);
    this.state = {
      userId: null,
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
      this.props.navigate("/");
      return;
    }

    this.setState({ userId });
  };

  render() {
    const { userId } = this.state;

    if (!userId) {
      return null;
    }

    return (
      <Layout title="Detalhes do Usuário">
        <UserDetail />
      </Layout>
    );
  }
}

export const UserDetailPage = withRouter(UserDetailPageClass);
export default UserDetailPage;
