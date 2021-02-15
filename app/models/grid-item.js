import { shape, string } from 'prop-types';

export const gridItemProps = shape({
  productId: string,
  price: string,
  title: string,
  image: string,
});

export const buildModel = (gridItem = {}) => {
  const {
    productId,
    price = {},
    title,
    image,
  } = gridItem;

  const { now } = price;

  return {
    productId,
    price: `£${now}`,
    title,
    image,
  };
};
