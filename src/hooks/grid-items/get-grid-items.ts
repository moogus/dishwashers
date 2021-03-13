import { useSelector } from "react-redux";

import {
  ApplicationState, 
  GridItemsState
} from "../../interfaces";
import {  GridItemModel } from "../../types";

import { buildModel } from "../../models/grid-item";

export default (): GridItemModel[] => {
  const { products  } = useSelector<ApplicationState, GridItemsState>((state) => state.grid);
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
