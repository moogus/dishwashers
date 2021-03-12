import React from "react";

import { ProductImage } from "../../components/ProductImage";
import { ProductDescription } from "../../components/ProductDescription";
import { ProductPrice } from "../../components/ProductPrice";

import useGetProduct from "../../hooks/product/get-product";

import {
  H2,
  H3,
  TextMarginContainer,
  GridContainer,
  LineSpacer,
  PortraitGridInnerContainer,
} from "./styled";

export const PortraitProductSection = () => {
  const { code } = useGetProduct();

  return (
    <div className="d-none d-sm-block d-md-block d-lg-none">
      <GridContainer className="row">
        <PortraitGridInnerContainer className="col">
          <ProductImage />
          <LineSpacer className="row pt1 pb1 border-top border-bottom" />
          <ProductPrice />
          <TextMarginContainer className="row">
            <div className="col">
              <H2>Product Information</H2>
            </div>
          </TextMarginContainer>
          <TextMarginContainer className="row">
            <div className="col">
              <H3>{`Product code: ${code}`}</H3>
            </div>
          </TextMarginContainer>
          <TextMarginContainer className="row">
            <ProductDescription />
          </TextMarginContainer>
        </PortraitGridInnerContainer>
      </GridContainer>
    </div>
  );
};
