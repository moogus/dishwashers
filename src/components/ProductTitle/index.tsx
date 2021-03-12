import React from "react";

import useGetProduct from "../../hooks/product/get-product";

import { H1 } from "./styled";

export const ProductTitle = () => {
  const { title } = useGetProduct();

  return <H1 className="pt-4 pb-4">{title}</H1>;
};
