import styled from "styled-components";

export const SearchWrapper = styled.div`
  margin-left: 20px;
`;

export const InputStyled = styled.input`
  padding: 10px 16px;
  border: 1px solid var(--border-gray);
  border-radius: 8px;
  color: var(--font-gray);
  font-size: 16px;
  font-weight: 300;

  &:focus {
    outline: 1px solid var(--font-gray);
  }
`;
