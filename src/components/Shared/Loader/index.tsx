import * as S from "./styles";

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text = "Carregando..." }) => {
  return (
    <S.LoaderContainer>
      <S.Spinner />
      <S.LoaderText>{text}</S.LoaderText>
    </S.LoaderContainer>
  );
};
