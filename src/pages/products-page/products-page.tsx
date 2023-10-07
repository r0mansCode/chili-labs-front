import { Item } from "../../models";
import s from "./products-page.module.scss";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "../../components/toolbar/toolbar";
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
} from "../../components/styled-components";
import { itemsPerPage } from "../../constants/constants";
import { Paginatinon } from "../../components/pagination/pagination";
import { useFilter } from "../../hooks/useFilterHook";

interface ProductsPageProps {
  items: Item[];
}

export const ProductsPage = ({ items }: ProductsPageProps) => {
  const navigate = useNavigate();
  const { filteredByNameItems } = useFilter();
  const totalPageCount =
    !!filteredByNameItems &&
    Math.ceil(filteredByNameItems.length / itemsPerPage);

  return (
    <>
      <Toolbar />
      <div className={s.productPageContainer}>
        <div className={s.tableContainer}>
          <div className={s.itemsCount}>
            {filteredByNameItems?.length} products
          </div>
          {!!items && (
            <StyledTable>
              <thead>
                <StyledTr id='tableHead'>
                  <StyledTh className={s.thDevices}>Product name</StyledTh>
                  <StyledTh>Price</StyledTh>
                  <StyledTh>Category</StyledTh>
                </StyledTr>
              </thead>
              <tbody>
                {!!items &&
                  items.map((item) => {
                    return (
                      <StyledTr
                        key={item.id}
                        onClick={() => navigate(`product/${item.id}`)}
                      >
                        <StyledTd>{item.name}</StyledTd>
                        <StyledTd>
                          {item.price} {item.currency}
                        </StyledTd>
                        <StyledTd>{item.category}</StyledTd>
                      </StyledTr>
                    );
                  })}
              </tbody>
            </StyledTable>
          )}
        </div>
        <Paginatinon pagesCount={totalPageCount} />
      </div>
    </>
  );
};
