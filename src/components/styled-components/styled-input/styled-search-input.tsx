import styled from "styled-components";

export const StyledSearchInput = styled.input`
  text-indent: 32px;
  width: 344px;
  height: 32px;
  background-color: var(--secondaryBackground);
  border: none;
  padding: 0;

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 550px) {
    width: 200px;
  }
`;
