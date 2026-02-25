import { useNavigate } from "react-router-dom";

import s from "./ProductPage.module.scss";
import ChangedProduct from "./components/ChangedProduct";
import RelatedProducts from "./components/RelatedProducts";
import { useProductPage } from "./hook/useProductPage";

import Loader from "@/components/UI/Loader";

const ProductPage = () => {
  const { loading, product, relatedProducts, relatedLoading } =
    useProductPage();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className={s.loader}>
        <Loader size="l" />
      </div>
    );
  }

  if (!product) {
    return <div className={s.notFound}>Товар не найден</div>;
  }

  const image = product.images[0].url || "";

  return (
    <div className={s.page}>
      <button className={s.back} onClick={() => navigate(-1)}>
        ← Назад
      </button>
      <ChangedProduct product={product} image={image} />
      <RelatedProducts
        relatedProducts={relatedProducts}
        navigate={navigate}
        isLoading={relatedLoading}
      />
    </div>
  );
};

export default ProductPage;
