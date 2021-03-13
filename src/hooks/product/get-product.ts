import { useSelector } from "react-redux";
import { buildModel } from "../../models/product";

import {  ProductModel } from "../../types"

import {
  ApplicationState, 
  ProductsState
} from "../../interfaces";

export default (): ProductModel => {
  const { product } = useSelector<ApplicationState, ProductsState>((state) => state.product);
  return buildModel(product);
};
