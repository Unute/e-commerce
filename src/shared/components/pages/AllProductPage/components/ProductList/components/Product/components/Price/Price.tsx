import React from "react";
import s from "./Price.module.scss";

type PriceProps = {
  price: number;
  discountPercent?: number | null;
};

const Price: React.FC<PriceProps> = ({ price, discountPercent }) => {
  const discountedPrice = discountPercent
    ? (price * (1 - discountPercent / 100)).toFixed(2)
    : price.toFixed(2);

  return (
    <>
      <span className={s.priceDiscounted}>${discountedPrice}</span>
      <span className={s.priceOriginal}>${price}</span>
      <span className={s.discountBadge}>-{discountPercent}%</span>
    </>
  )
}

export default Price;