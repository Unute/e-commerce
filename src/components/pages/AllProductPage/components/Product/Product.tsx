import { useState } from "react";
import { useNavigate } from "react-router-dom";

import s from "./Product.module.scss";
import Pagination from "./components/Pagination";
import type { ProductProps } from "./types";

import Card from "@/components/UI/Card";
import Loader from "@/components/UI/Loader";

const CARDS_PER_PAGE = 9;

const Product: React.FC<ProductProps> = ({ products, loading }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const endIdx = startIdx + CARDS_PER_PAGE;
  const pageProducts = products.slice(startIdx, endIdx);

  return (
    <>
      {loading ? (
        <div className={s.loader}>
          <Loader size="l" />
        </div>
      ) : (
        <>
          <div className={s.grid}>
            {pageProducts.map((product) => {
              const image: string = product.images[0].url;
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
            })}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </>
  );
};

export default Product;
