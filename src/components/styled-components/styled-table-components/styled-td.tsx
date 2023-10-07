import styled from "styled-components";

export const StyledTd = styled.td`
  white-space: nowrap;
  text-align: left;
  text-transform: capitalize;
  border-bottom: 1px solid rgba(237, 237, 240, 1);
  &:not(#tableHead) {
    padding-block: 4px;
  }
`;
