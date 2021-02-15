import { useSelector } from 'react-redux';
import { buildModel } from 'models/product';

export default () => {
  const { product } = useSelector((state) => state.product);
  return buildModel(product);
};
