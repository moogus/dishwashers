import { useSelector } from 'react-redux';
import { buildModel } from 'models/grid-item';

export default () => {
  const { products = [] } = useSelector((state) => state.grid);
  if (products.length > 20) {
    const firstTwentyGridItems = products.slice(0, 20);

    return firstTwentyGridItems.map(
      (gridItem) => buildModel(gridItem),
    );
  }
  return products.map(
    (gridItem) => buildModel(gridItem),
  );
};
