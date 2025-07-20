import * as S from "./styles";

interface LoaderProps {
  text?: string;
}

export const Loader = ({ text = "Carregando..." }: LoaderProps) => {
  return (
    <S.LoaderContainer>
      <S.Spinner />
      <S.LoaderText>{text}</S.LoaderText>
    </S.LoaderContainer>
  );
};
