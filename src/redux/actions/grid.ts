export const GRID_LOADING = "GRID_LOADING";
export const GRID_LOADED = "GRID_LOADED";
export const GRID_ERROR = "GRID_ERROR";

export const loadProductGrid = () => async (dispatch, _, config) => {
  dispatch({ type: GRID_LOADING });
  try {
    const response = await fetch(config.gridApi);
    const { products } = await response.json();

    dispatch({ type: GRID_LOADED, products });
  } catch (err) {
    dispatch({ type: GRID_ERROR });
  }
};
