import { SearchInput } from "../search-input/search-input";
import s from "./toolbar.module.scss";

export const Toolbar = () => {
  return (
    <div className={s.toolbarContainer}>
      <SearchInput />
    </div>
  );
};
