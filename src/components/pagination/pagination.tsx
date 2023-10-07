import React from "react";
import { PaginationWrapper } from "../styled-components";
import { PaginationElement } from "./pagination-element";

interface PaginatinonProps {
  pagesCount: number;
}

export const Paginatinon = ({ pagesCount }: PaginatinonProps) => {
  return (
    <PaginationWrapper>
      {[...Array(pagesCount)].map((_, ind) => {
        const pageNr = ind + 1;
        return (
          <React.Fragment key={ind}>
            <PaginationElement
              pageNumber={pageNr.toString()}
              pagesCount={pagesCount}
            />
          </React.Fragment>
        );
      })}
    </PaginationWrapper>
  );
};
