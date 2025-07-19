import styled from 'styled-components';
import type { ChangeEvent } from 'react';

const SearchContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.lg};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  z-index: 1;
  pointer-events: none;
`;

const SearchInputField = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg} 3.5rem;
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
    box-shadow: ${({ theme }) => theme.shadows.md}, 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
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

const SearchLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ClearButton = styled.button<{ $visible: boolean }>`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.textLight};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.danger};
    transform: translateY(-50%) scale(1.1);
  }
`;

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Digite o nome do usuário...',
  label = '🔍 Buscar usuário por nome',
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <SearchContainer>
      <SearchLabel htmlFor="search-input">
        {label}
      </SearchLabel>
      <SearchWrapper>
        <SearchIcon>🔍</SearchIcon>
        <SearchInputField
          id="search-input"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <ClearButton
          type="button"
          $visible={value.length > 0}
          onClick={handleClear}
          title="Limpar busca"
        >
          ✕
        </ClearButton>
      </SearchWrapper>
    </SearchContainer>
  );
};