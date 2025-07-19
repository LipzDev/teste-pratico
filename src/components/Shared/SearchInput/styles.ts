import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.lg};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  z-index: 1;
  pointer-events: none;
`;

export const SearchInputField = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.lg} 3.5rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow:
      ${({ theme }) => theme.shadows.md},
      0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const SearchLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ClearButton = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.md};
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: ${({ theme }) => theme.borderRadius.full};

  width: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.typography.fontSize.base};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;
