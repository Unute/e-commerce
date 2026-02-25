import s from "./RelatedProducts.module.scss";

import Card from "@/components/UI/Card";
import Loader from "@/components/UI/Loader";
import type { Product } from "@/types/product";

type RelatedProductsProps = {
  relatedProducts: Product[] | undefined;
  navigate: (path: string) => void;
  isLoading?: boolean;
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  relatedProducts,
  navigate,
  isLoading,
}) => {
  return (
    <div>
      <h2 className={s.title}>Related Products</h2>
      <div className={s.related}>
        {isLoading ? (
          <Loader size="l" />
        ) : (
          relatedProducts?.slice(0, 3).map((product) => {
            const image = product.images[0].url;
            return (
              <Card
                key={product.documentId}
                image={image}
                captionSlot={product.productCategory?.title}
                title={product.title}
                subtitle={product.description}
                contentSlot={`$${product.price}`}
                onClick={() => navigate(`/product/${product.documentId}`)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
