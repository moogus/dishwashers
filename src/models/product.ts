import { ApiProductModel, ProductModel } from "../types";

export const buildModel = (apiProduct:ApiProductModel):ProductModel => {
  const {
    title,
    media,
    price,
    details,
    displaySpecialOffer,
    additionalServices,
    code,
  } = apiProduct;

  const { now } = price;
  const { productInformation } = details;
  const { images } = media;
  const { altText, urls } = images;

  return {
    title,
    media: { altText, urls },
    price: `£${now}`,
    productInformation,
    displaySpecialOffer,
    additionalServices,
    code,
  };
};
