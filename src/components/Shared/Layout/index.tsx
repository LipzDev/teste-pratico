import type { ReactNode } from "react";
import * as S from "./styles";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export const Layout = ({
  children,
  title = "Lista de Usuários",
  subtitle = "Gerencie e explore informações de usuários de forma elegante e intuitiva",
}: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <S.HeaderBackground>
        <S.HeaderContent>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.HeaderContent>
      </S.HeaderBackground>
      <S.MainContent>
        <S.ContentContainer className="animate-fade-in">
          {children}
        </S.ContentContainer>
      </S.MainContent>
    </S.LayoutContainer>
  );
};
