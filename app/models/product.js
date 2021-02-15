export const buildModel = (product = {}) => {
  const {
    title,
    media = {},
    price = {},
    details = {},
    displaySpecialOffer,
    additionalServices,
    code,
  } = product;

  const { now = '' } = price;
  const { productInformation } = details;
  const { images = {} } = media;
  const { altText = '', urls = [] } = images;

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
