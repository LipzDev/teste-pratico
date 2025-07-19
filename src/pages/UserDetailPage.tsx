import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Shared/Layout';
import { UserDetail } from '../components/UserDetail/UserDetail.class';

export const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const userId = id ? parseInt(id, 10) : 0;

  if (!id || isNaN(userId)) {
    navigate('/');
    return null;
  }

  return (
    <Layout title="Detalhes do Usuário">
      <UserDetail userId={userId} navigate={navigate} />
    </Layout>
  );
};