import { useAppSelector } from "./redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Item } from "../models";
import { SearchUrls, itemsPerPage } from "../constants/constants";

export const useFilter = () => {
  const { items } = useAppSelector((state) => state.dataReducer);

  const [filteredItems, setFilteredItems] = useState(items);
  const [filteredByNameItems, setFilteredByNameItems] = useState<Item[]>([]);

  const [searchParams] = useSearchParams();
  const searchUrl = searchParams.get(SearchUrls.search) || "";
  const pageNrUrl = searchParams.get(SearchUrls.page) || "";

  useEffect(() => {
    const filteredByNameArray = () => {
      if (searchUrl?.length > 0) {
        return items.filter((item: Item) =>
          item.name.toLowerCase().includes(searchUrl.toLowerCase())
        );
      } else {
        return items;
      }
    };

    const startIndex = (Number(pageNrUrl) - 1) * itemsPerPage;
    const endIndex = Number(pageNrUrl) * itemsPerPage;
    const paginatedItems = filteredByNameArray().slice(startIndex, endIndex);

    setFilteredByNameItems(filteredByNameArray());
    setFilteredItems(paginatedItems);
  }, [items, searchParams]);

  return { filteredItems, filteredByNameItems };
};
