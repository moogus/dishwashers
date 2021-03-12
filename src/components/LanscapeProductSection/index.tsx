import React from "react";

import { ProductImage } from "../ProductImage";
import { ProductDescription } from "../ProductDescription";
import { ProductPrice } from "../ProductPrice";

import useGetProduct from "../../hooks/product/get-product";

import {
  H2,
  H3,
  TextMarginContainer,
  GridContainer,
  LanscapeGridInnerContainer,
} from "./styled";

export const LandscapeProductSection = () => {
  const { code } = useGetProduct();

  return (
    <div className="d-none d-lg-block -xl-block">
      <GridContainer>
        <LanscapeGridInnerContainer>
          <div className="row">
            <div className="col-8  pr-0">
              <ProductImage />
              <TextMarginContainer className="row">
                <div className="col">
                  <H2>Product Information</H2>
                </div>
              </TextMarginContainer>
              <TextMarginContainer className="row">
                <div className="col ">
                  <H3>{`Product code: ${code}`}</H3>
                </div>
              </TextMarginContainer>
              <TextMarginContainer className="row">
                <ProductDescription />
              </TextMarginContainer>
            </div>
            <div className="col-4 border-left">
              <ProductPrice />
            </div>
          </div>
        </LanscapeGridInnerContainer>
      </GridContainer>
    </div>
  );
};
