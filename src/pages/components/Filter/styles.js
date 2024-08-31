import styled from "styled-components";

export const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "8px",
    minWidth: "240px",
    padding: "4px 8px",
    boxShadow: "none",
    borderColor: state.isFocused
      ? "var(--font-gray) !important"
      : "var(--border-gray)",
  }),
};

export const StyledLabel = styled.div`
  font-size: 16px;
  color: var(--font-gray);
  margin-bottom: 8px;
`;
