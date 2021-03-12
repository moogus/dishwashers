import React from "react";

import useGetProduct from "../../hooks/product/get-product";

export const ProductDescription = () => {
  const { productInformation } = useGetProduct();
  const createMarkup = () => ({ __html: productInformation });

  return (
    <div className="col">
      <span dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
