import { useParams, useNavigate } from 'react-router-dom';

export const useUserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const userId = id ? parseInt(id, 10) : 0;

  if (!id || isNaN(userId)) {
    navigate('/');
    return { userId: null };
  }

  return { userId };
};