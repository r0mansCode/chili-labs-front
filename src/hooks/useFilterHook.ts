import { useEffect, useState } from "react";
import { Item } from "../models";
import { itemsPerPage } from "../constants/constants";

export const useFilter = (
  items: Item[],
  searchUrl: string,
  pageNrUrl: string
) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [filteredByNameItems, setFilteredByNameItems] = useState<Item[]>([]);

  useEffect(() => {
    if (items?.length > 0) {
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
    }
  }, [items, searchUrl, pageNrUrl]);

  return { filteredItems, filteredByNameItems };
};
