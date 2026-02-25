import React from "react";

import s from "./ChangedProduct.module.scss";

import Button from "@/components/UI/Button";
import Text from "@/components/UI/Text";
import type { Product } from "@/types/product";

type ChangedProductProps = {
  product: Product;
  image: string;
};

const ChangedProduct: React.FC<ChangedProductProps> = ({ product, image }) => {
  return (
    <div className={s.content}>
      <img src={image} alt={product.title} className={s.image} />
      <div className={s.info}>
        <Text view="title" weight="bold">
          {product.title}
        </Text>
        {product.productCategory && (
          <Text view="p-14" color="secondary">
            {product.productCategory.title}
          </Text>
        )}
        <Text view="p-16" color="secondary" className={s.description}>
          {product.description}
        </Text>
        <Text view="p-20" weight="bold">
          ${product.price}
        </Text>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ChangedProduct;
