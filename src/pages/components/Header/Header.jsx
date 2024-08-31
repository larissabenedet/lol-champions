import React from "react";
import Search from "../Search";
import RoleFilter from "../Filter/RoleFilter";
import {
  BlocksOrganizer,
  FilterBlocks,
  StyledHeader,
  StyledLogo,
} from "./styles";
import { inconsolata } from "@/styles/fonts";
import ResourceFilter from "../Filter/ResourceFilter";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo className={inconsolata.className} href="/">
        LC ✨
      </StyledLogo>
      <BlocksOrganizer>
        <Search />
        <FilterBlocks>
          <ResourceFilter />
          <RoleFilter />
        </FilterBlocks>
      </BlocksOrganizer>
    </StyledHeader>
  );
};

export default Header;
