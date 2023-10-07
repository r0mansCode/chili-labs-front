import styled from "styled-components";

export const StyledTr = styled.tr`
  &:not(#tableHead) {
    cursor: pointer;
  }

  &:hover:not(#tableHead) {
    background-color: #d1b8b8;
    color: white;
  }
`;
