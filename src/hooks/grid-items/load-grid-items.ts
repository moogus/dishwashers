import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ApplicationState, 
  GridItemsState
} from "../../interfaces";

import { loadProductGrid } from "../../redux/actions/grid";

type LoadGridItemsHook = {
  loading: boolean;
  error: boolean
}

export default (): LoadGridItemsHook => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector<ApplicationState, GridItemsState>((state) => state.grid);

  useEffect(() => {
    dispatch(loadProductGrid());
    // eslint-disable-next-line
  }, []);

  return { loading, error };
};
