import React from 'react';
import { useNavigate } from '@reach/router';

import { gridItemProps } from 'models/grid-item';

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
} from './styled';

const GridItem = ({ gridItem }) => {
  const {
    productId,
    price,
    title,
    image,
  } = gridItem;

  const navigate = useNavigate();

  return (
        <GridContainer
          data-testid="clickable-grid-item"
          className="col-md-3"
          onClick={() => navigate(`product/${productId}`)}>
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

GridItem.propTypes = { gridItem: gridItemProps };

export default GridItem;
