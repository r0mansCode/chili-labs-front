import s from "./single-product-page.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { selectItemById } from "../../store/reducers/DataSlice";
import { useAppSelector } from "../../hooks/redux";
import { Item } from "../../models";
import { SVGIcon } from "../../components/svg-icon/svg-icon";
import { IconNames } from "../../constants/constants";

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
          <div className={s.singleDeviceNav}>
            <div className={s.singleDeviceTitle}>{product.name}</div>
            <SVGIcon
              iconName={IconNames.backIcon}
              onClick={() => navigate(-1)}
              className={s.singleDeviceBackIcon}
            />
          </div>
          <div className={s.deviceContainer}>
            <div className={s.deviceSubContainer}>
              <div className={s.infoContainer}>
                {productInformationList(product).map(
                  (row) =>
                    !!row.info && (
                      <div className={s.infoRow} key={row.name}>
                        <div>{row.name}</div>
                        <div>{row.info}&nbsp;</div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
