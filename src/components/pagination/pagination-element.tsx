import { usePagination } from "../../hooks/usePaginationHook";
import { StyledPageNr } from "../styled-components";

interface PaginationElementProps {
  pageNumber: string;
  pagesCount: number;
}

export const PaginationElement = ({
  pageNumber,
  pagesCount,
}: PaginationElementProps) => {
  const { setPage } = usePagination({ pageNr: pageNumber, pagesCount });
  return <StyledPageNr onClick={setPage}>{pageNumber}</StyledPageNr>;
};
