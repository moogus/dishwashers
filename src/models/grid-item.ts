import { ApiGridItemModel, GridItemModel } from "../types";

export const buildModel = (apiGridItem: ApiGridItemModel): GridItemModel => {
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
