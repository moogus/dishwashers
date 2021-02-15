import React from 'react';
import { string } from 'prop-types';

import ProductImage from 'components/ProductImage';
import ProductDescription from 'components/ProductDescription';
import ProductPrice from 'components/ProductPrice';

import {
  H2,
  H3,
  TextMarginContainer,
  GridContainer,
  LanscapeGridInnerContainer,
} from './styled';

const LandscapeProductSection = ({ code }) => (
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
                    <ProductDescription/>
                  </TextMarginContainer>
                </div>
                <div className="col-4 border-left">
                  <ProductPrice/>
                </div>
              </div>
            </LanscapeGridInnerContainer>
          </GridContainer>
        </div>
);

LandscapeProductSection.propTypes = { code: string };

export default LandscapeProductSection;
