import styled from "styled-components";

export const StyledPageNr = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  color: white;
  background-color: #d92c2c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    scale: 0.95;
  }
`;
