import { useSearchParams } from "react-router-dom";
import { IconNames, SearchUrls } from "../../constants/constants";
import { StyledSearchInput } from "../styled-components";
import { SVGIcon } from "../svg-icon/svg-icon";
import s from "./search-input.module.scss";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounceHook";

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchUrl = searchParams.get(SearchUrls.search) || "";
  const pageNrUrl = searchParams.get(SearchUrls.page) || "";

  const [inputValue, setInputValue] = useState(searchUrl);
  const debouncedInputValue = useDebounce(inputValue);

  const hasPageNrUrl = !!pageNrUrl ? pageNrUrl : "1";

  const handleChange = () => {
    if (!!inputValue) {
      setSearchParams({ search: inputValue, page: pageNrUrl });
    } else {
      setSearchParams({ page: hasPageNrUrl });
    }
  };

  useEffect(() => {
    handleChange();
  }, [debouncedInputValue]);

  return (
    <div className={s.inputContainer}>
      <SVGIcon iconName={IconNames.searchIcon} className={s.searchIcon} />
      <StyledSearchInput
        placeholder='Search'
        name='productSearch'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <SVGIcon
        iconName={IconNames.closeIcon}
        className={s.closeIcon}
        onClick={() => setInputValue("")}
      />
    </div>
  );
};
