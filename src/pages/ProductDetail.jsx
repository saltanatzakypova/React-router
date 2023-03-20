import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <div>
      <h2>Produc Detail {params.productId}</h2>
    </div>
  );
}

export default ProductDetail;
