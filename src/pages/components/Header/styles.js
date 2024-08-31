import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-top: 80px;
  display: flex;
  align-items: end;
`;

export const StyledLogo = styled(Link)`
  font-weight: 700;
  color: var(--black);
  font-size: 46px;
`;

export const BlocksOrganizer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const FilterBlocks = styled.div`
  display: flex;
  align-items: center;
  align-self: end;

  & form:first-of-type {
    margin-right: 50px;
  }
`;
