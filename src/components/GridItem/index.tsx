import React, { FunctionComponent } from "react";
import { useNavigate } from "@reach/router";

import { GridItem as GridItemType } from "../../types";

type GridItemProps = {
  gridItem: GridItemType;
};

import {
  GridContainer,
  GridInnerContainer,
  ImageRow,
  ImageColumn,
  FluidImage,
  DescriptionTextArea,
  DescriptionText,
  PriceTextArea,
  PriceText,
} from "./styled";

export const GridItem: FunctionComponent<GridItemProps> = ({ gridItem }) => {
  const { productId, price, title, image } = gridItem;

  const navigate = useNavigate();

  return (
    <GridContainer
      data-testid="clickable-grid-item"
      className="col-md-3"
      onClick={() => navigate(`product/${productId}`)}
    >
      <GridInnerContainer>
        <ImageRow className="row">
          <ImageColumn className="col">
            <FluidImage src={image} alt={title} />
          </ImageColumn>
        </ImageRow>
        <DescriptionTextArea>
          <DescriptionText>{title}</DescriptionText>
        </DescriptionTextArea>
        <PriceTextArea>
          <PriceText>{price}</PriceText>
        </PriceTextArea>
      </GridInnerContainer>
    </GridContainer>
  );
};
