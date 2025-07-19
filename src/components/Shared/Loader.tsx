import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.light};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const LoaderText = styled.p`
  margin-left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
`;

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text = 'Carregando...' }) => {
  return (
    <LoaderContainer>
      <Spinner />
      <LoaderText>{text}</LoaderText>
    </LoaderContainer>
  );
};