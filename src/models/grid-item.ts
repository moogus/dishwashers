import { ApiGridItem, GridItem } from "../types";

export const buildModel = (apiGridItem: ApiGridItem): GridItem => {
  const {
    productId,
    price,
    title,
    image,
  } = apiGridItem;

  const { now } = price;

  return {
    productId,
    price: `£${now}`,
    title,
    image,
  };
};
