import React from "react";

import useGetProduct from "../../hooks/product/get-product";

import { PriceText, TextMarginContainer, RedText } from "./styled";

export const ProductPrice = () => {
  const { price, additionalServices } = useGetProduct();
  const { includedServices = [] } = additionalServices;

  return (
    <TextMarginContainer className="row">
      <div className="col">
        <PriceText>{price}</PriceText>
        <RedText>Claim an extra 3 years guarantee via redemption</RedText>
        {includedServices.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </TextMarginContainer>
  );
};
