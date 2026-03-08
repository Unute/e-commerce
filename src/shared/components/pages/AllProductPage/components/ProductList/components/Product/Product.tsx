'use client';

import React, { useState } from 'react'
import s from "./../../ProductList.module.scss";
import Button from "@UI/Button";
import Card from "@UI/Card";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { useStore } from '@/shared/stores/context';
import type { Product } from "@/shared/types/product";
import Quantity from './components/Quantity/Quantity';
import BuyModal from './components/BuyModal/BuyModal';


type ProductProps = {
  product: Product;
  image: string;
  discountedPrice: string | null;
  inCart: boolean;
  setToast: (msg: string) => void;
};

const Product: React.FC<ProductProps> = observer(({ product, image, discountedPrice, inCart, setToast }) => {
  const router = useRouter();
  const { cartStore } = useStore();
  const [showBuyModal, setShowBuyModal] = useState(false);

  const handleBuyConfirm = (qty: number) => {
    setShowBuyModal(false);
    setToast(`✅ Покупка оформлена: "${product.title}" x${qty} — $${((discountedPrice ? parseFloat(discountedPrice) : product.price) * qty).toFixed(2)}`);
  };

  return (
    <>
      {showBuyModal && (
        <BuyModal
          product={product}
          discountedPrice={discountedPrice}
          onClose={() => setShowBuyModal(false)}
          onConfirm={handleBuyConfirm}
        />
      )}
      <Card
        image={image}
        captionSlot={
          <span className={s.caption}>
            {product.productCategory?.title}
            {product.rating != null && (
              <span className={s.rating}>⭐ {product.rating}</span>
            )}
          </span>
        }
        title={product.title}
        subtitle={product.description}
        contentSlot={
          <span className={s.price}>
            {discountedPrice ? (
              <>
                <span className={s.priceDiscounted}>${discountedPrice}</span>
                <span className={s.priceOriginal}>${product.price}</span>
                <span className={s.discountBadge}>-{product.discountPercent}%</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </span>
        }
        onClick={() => router.push(`/product/${product.documentId}`)}
        actionSlot={
          <span className={s.actions}>
            {inCart ? (
              <Quantity product={product} cartStore={cartStore} setToast={setToast} />
            ) : (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  cartStore.addToCart(product.id, 1);
                  setToast(`Product "${product.title}" added to cart`);
                }}
              >
                Add to Cart
              </Button>
            )}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setShowBuyModal(true);
              }}
            >
              Buy Now
            </Button>
          </span>
        }
      />
    </>
  )
})

export default Product