import { useSelector } from "react-redux";
import { buildModel } from "../../models/product";

import {
  ApplicationState, 
  ProductsState
} from "../../interfaces";

export default () => {
  const { product } = useSelector<ApplicationState, ProductsState>((state) => state.product);
  return buildModel(product);
};
