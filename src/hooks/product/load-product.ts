import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../redux/actions/product";

import {
  ApplicationState, 
  ProductsState
} from "../../interfaces";

export default (productId) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector<ApplicationState, ProductsState>((state) => state.product);

  useEffect(() => {
    dispatch(loadProduct(productId));
    // eslint-disable-next-line
  }, []);

  return { loading, error };
};
