import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from 'actions/product';

export default (productId) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(loadProduct(productId));
    // eslint-disable-next-line
  }, []);

  return { loading, error };
};
