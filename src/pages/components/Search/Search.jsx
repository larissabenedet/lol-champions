import React from "react";
import { inter } from "@/styles/fonts";
import { StyledLabel } from "../Filter/styles";
import { InputStyled, SearchWrapper } from "./styles";

const Search = () => {
  return (
    <SearchWrapper>
      <form>
        <label htmlFor="search-champion">
          <StyledLabel className={inter.className}>Search</StyledLabel>
        </label>
        <InputStyled
          type="search"
          name="search-champion"
          id="search-champion"
          placeholder="Ex: Miss Fortune"
          className={inter.className}
        />
      </form>
    </SearchWrapper>
  );
};

export default Search;
