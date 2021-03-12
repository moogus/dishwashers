import React, { useState, useEffect } from "react";

import useGetProduct from "../../hooks/product/get-product";

import {
  FluidImage,
  FluidImageContainer,
  ActiveDotButton,
  NotActiveDotButton,
} from "./styled";

export const ProductImage = () => {
  const { media } = useGetProduct();
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const { altText = "", urls = [] } = media;

  useEffect(() => {
    setImageUrls(urls.length < 3 ? urls.slice() : urls.slice(0, 3));
    setSelectedImage(urls[0]);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="row">
        <FluidImageContainer className="col">
          <FluidImage
            data-testid="selected-image"
            src={selectedImage}
            alt={altText}
            className="d-flex justify-content-center"
          />
        </FluidImageContainer>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="d-flex justify-content-center"
            data-testid="image-select-buttons"
          >
            {imageUrls.map((imageUrl) =>
              imageUrl === selectedImage ? (
                <ActiveDotButton key={imageUrl}>&#8226;</ActiveDotButton>
              ) : (
                <NotActiveDotButton
                  data-testid="activate-image"
                  key={imageUrl}
                  onClick={() => setSelectedImage(imageUrl)}
                >
                  &#8226;
                </NotActiveDotButton>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
