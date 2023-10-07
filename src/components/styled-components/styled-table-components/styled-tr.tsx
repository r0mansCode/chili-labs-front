import styled from "styled-components";

export const StyledTr = styled.tr`
  &:not(#tableHead) {
    cursor: pointer;
  }

  &:hover:not(#tableHead) {
    background-color: var(--hoverBackground);
  }
`;
