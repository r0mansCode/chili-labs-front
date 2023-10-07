import { Item } from "../../models";
import { useNavigate } from "react-router-dom";
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
} from "../../components/styled-components";

interface ProductsTableProps {
  items: Item[];
}

export const ProductsTable = ({ items }: ProductsTableProps) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledTable>
        <thead>
          <StyledTr id='tableHead'>
            <StyledTh>Product name</StyledTh>
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
    </>
  );
};
