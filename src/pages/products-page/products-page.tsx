import { Item } from "../../models";
import s from "./products-page.module.scss";
import { Toolbar } from "../../components/toolbar/toolbar";
import { itemsPerPage } from "../../constants/constants";
import { Paginatinon } from "../../components/pagination/pagination";
import { ProductsTable } from "../../components/products-table/products-table";

interface ProductsPageProps {
  items: Item[];
  filteredByNameItems: Item[];
  isLoading: boolean;
  error: string;
}

export const ProductsPage = ({
  items,
  filteredByNameItems,
  error,
  isLoading,
}: ProductsPageProps) => {
  const totalPageCount =
    !!filteredByNameItems &&
    Math.ceil(filteredByNameItems.length / itemsPerPage);

  const canRender = !isLoading && !error;

  return (
    <>
      <Toolbar />
      {error && <h1>Oooops, something wrong with the data...</h1>}
      {isLoading && <h1>...Loading</h1>}
      {!!items && canRender && (
        <div className={s.productPageContainer}>
          <div className={s.tableContainer}>
            <div className={s.itemsCount}>
              {filteredByNameItems?.length} products
            </div>
            <ProductsTable items={items} />
          </div>
          <Paginatinon pagesCount={totalPageCount} />
        </div>
      )}
    </>
  );
};
