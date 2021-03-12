import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductGrid } from "../../redux/actions/grid";

import {
  ApplicationState, 
  GridItemsState
} from "../../interfaces";

export default () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector<ApplicationState, GridItemsState>((state) => state.grid);

  useEffect(() => {
    dispatch(loadProductGrid());
    // eslint-disable-next-line
  }, []);

  return { loading, error };
};
