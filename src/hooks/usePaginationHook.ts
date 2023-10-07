import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchUrls } from "../constants/constants";

interface UsePaginationProps {
  pageNr: string;
  pagesCount: number;
}

export const usePagination = ({ pageNr, pagesCount }: UsePaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchUrl = searchParams.get(SearchUrls.search) ?? "";
  const pageNrUrl = searchParams.get(SearchUrls.page) ?? "";

  const biggerPageThanTotalCount = Number(pageNrUrl) > pagesCount;

  const setPage = () => {
    if (!!searchUrl) {
      setSearchParams({ search: searchUrl, page: pageNr });
    } else {
      setSearchParams({ page: pageNr });
    }
  };

  useEffect(() => {
    if (biggerPageThanTotalCount) {
      setSearchParams({ search: searchUrl, page: "1" });
    }
  }, [pagesCount]);

  return { setPage };
};
