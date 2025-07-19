import styled from "styled-components";

export const ActionButton = styled.button<{
  variant?: "primary" | "secondary" | "danger";
}>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  min-height: 44px;

  ${({ theme, variant = "primary" }) => {
    switch (variant) {
      case "secondary":
        return `
          background: ${theme.colors.backgroundAlt};
          color: ${theme.colors.text};
          border-color: ${theme.colors.border};
          
          &:hover {
            background: ${theme.colors.border};
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.md};
          }
        `;
      case "danger":
        return `
          background: linear-gradient(135deg, ${theme.colors.danger} 0%, #dc2626 100%);
          color: ${theme.colors.white};
          
          &:hover {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.md};
          }
        `;
      default:
        return `
          background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
          color: ${theme.colors.white};
          
          &:hover {
            background: linear-gradient(135deg, ${theme.colors.primaryLight} 0%, ${theme.colors.accent} 100%);
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.md};
          }
        `;
    }
  }}
`;

export const FavoriteIcon = styled.span<{ $isFavorite: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: ${({ theme }) => theme.transitions.fast};
  filter: ${({ $isFavorite }) => ($isFavorite ? "none" : "grayscale(1)")};

  ${ActionButton}:hover & {
    transform: scale(1.2);
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: space-between;
`;

export const DetailText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

export const DetailIcon = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  width: 20px;
  text-align: center;
  flex-shrink: 0;
`;

export const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) => theme.transitions.normal};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.accent} 100%
    );
    opacity: 0;
    transition: ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};

    &::before {
      opacity: 1;
    }
  }
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const UserAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  flex-shrink: 0;
`;
