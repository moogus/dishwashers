import { ApiProduct, Product } from "../types"

export const buildModel = (apiProduct:ApiProduct):Product => {
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
