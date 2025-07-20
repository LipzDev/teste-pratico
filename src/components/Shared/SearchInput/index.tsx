import type { ChangeEvent } from "react";
import * as S from "./styles";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Digite o nome do usuário...",
  label = "Buscar usuário por nome",
}: SearchInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <S.SearchContainer>
      <S.SearchLabel htmlFor="search-input">{label}</S.SearchLabel>
      <S.SearchWrapper>
        <S.SearchInputField
          id="search-input"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <S.ClearButton
          type="button"
          $visible={value.length > 0}
          onClick={handleClear}
          title="Limpar busca"
        >
          x
        </S.ClearButton>
      </S.SearchWrapper>
    </S.SearchContainer>
  );
};
