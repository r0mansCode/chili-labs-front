import s from "./single-product-item.module.scss";

interface SingleItem {
  info: string;
  name: string;
}

interface SingleProductItemProps {
  singleItem: SingleItem;
}

export const SingleProductItem = ({ singleItem }: SingleProductItemProps) => {
  return (
    <>
      {!!singleItem && (
        <div className={s.infoRow} key={singleItem.name}>
          {singleItem.name !== "Description" && <div>{singleItem.name}</div>}
          <div>{singleItem.info}&nbsp;</div>
        </div>
      )}
    </>
  );
};
