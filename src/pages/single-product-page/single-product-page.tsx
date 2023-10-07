import s from "./single-product-page.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { selectItemById } from "../../store/reducers/DataSlice";
import { useAppSelector } from "../../hooks/redux";
import { Item } from "../../models";
import { SVGIcon } from "../../components/svg-icon/svg-icon";
import { IconNames } from "../../constants/constants";
import { SingleProductItem } from "../../components/single-product-item/single-product-item";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useAppSelector((state) => selectItemById(state, productId));

  const productInformationList = (product: Item) => [
    { name: "Name", info: product.name },
    { name: "Price", info: `${product.price} ${product.currency}` },
    { name: "Category", info: product.category },
    { name: "Description", info: product.description },
  ];

  return (
    <>
      {!!product && (
        <div>
          <div className={s.singleItemNav}>
            <div className={s.singleProductTitle}>{product.name}</div>
            <SVGIcon
              iconName={IconNames.backIcon}
              onClick={() => navigate(-1)}
              className={s.singleProductBackIcon}
            />
          </div>
          <div className={s.productContainer}>
            <div className={s.infoContainer}>
              {productInformationList(product).map((item) => (
                <SingleProductItem singleItem={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
