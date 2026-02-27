import React from "react";
import { observer } from "mobx-react-lite";
import s from "./ChangedProduct.module.scss";
import Button from "@/components/UI/Button";
import Text from "@/components/UI/Text";
import type { Product } from "@/types/product";
import { useStore } from "@/stores/context";

type ChangedProductProps = {
  product: Product;
  image: string;
};

const ChangedProduct: React.FC<ChangedProductProps> = observer(({ product, image }) => {
  const { cartStore } = useStore();
  const inCart = cartStore.isInCart(product.documentId);

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
        <Button
          className={s.button_cart}
          onClick={() =>
            inCart
              ? cartStore.removeFromCart(product.documentId)
              : cartStore.addToCart(product)
          }
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
});

export default ChangedProduct;
