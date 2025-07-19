import { useUserDetailPage } from "@/hooks/useUserDetailPage";
import { Layout } from "@/components/Shared/Layout";
import { UserDetail } from "@/components/UserDetail";

export const UserDetailPage: React.FC = () => {
  const { userId } = useUserDetailPage();

  if (!userId) {
    return null;
  }

  return (
    <Layout title="Detalhes do Usuário">
      <UserDetail />
    </Layout>
  );
};
