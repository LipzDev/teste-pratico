import styled from "styled-components";

export const UserDetailContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const UserDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const UserTitle = styled.div`
  flex: 1;
`;

export const UserName = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const UserUsername = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.125rem;
  font-style: italic;
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-wrap: nowrap;
  white-space: nowrap;

  ${({ theme, isFavorite }) =>
    isFavorite
      ? `
        background-color: ${theme.colors.danger};
        color: ${theme.colors.white};
        &:hover {
          background-color: #c82333;
        }
      `
      : `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        &:hover {
          background-color: #0056b3;
        }
      `}
`;

export const UserDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const DetailSection = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const DetailItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DetailLabel = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const DetailValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: background-color 0.2s ease;
  text-wrap: nowrap;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;
