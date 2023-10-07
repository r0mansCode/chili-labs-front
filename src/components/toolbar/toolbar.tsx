import s from "./toolbar.module.scss";
import { SVGIcon } from "../svg-icon/svg-icon";
import { IconNames, SearchUrls } from "../../constants/constants";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useDebounce } from "../../hooks/useDebounceHook";

export const Toolbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchUrl = searchParams.get(SearchUrls.search) ?? "";
  const pageNrUrl = searchParams.get(SearchUrls.page) ?? "";
  const [inputValue, setInputValue] = useState(searchUrl);

  const handleChange = () => {
    if (!!inputValue) {
      setSearchParams({ search: inputValue, page: pageNrUrl });
    } else {
      setSearchParams({ page: pageNrUrl });
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      handleChange();
    }, 600);

    return () => {
      clearTimeout(id);
    };
  }, [inputValue]);

  return (
    <div className={s.toolbarContainer}>
      <section className={s.toolbarSec}>
        <SVGIcon iconName={IconNames.searchIcon} className={s.searchIcon} />
        <input
          className={s.searchInput}
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
      </section>
    </div>
  );
};
