import { useSelector } from "react-redux";
import { buildModel } from "../../models/grid-item";

import {
  ApplicationState, 
  GridItemsState
} from "../../interfaces";

export default () => {
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
