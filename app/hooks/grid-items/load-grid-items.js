import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductGrid } from 'actions/grid';

export default () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.grid);

  useEffect(() => {
    dispatch(loadProductGrid());
    // eslint-disable-next-line
  }, []);

  return { loading, error };
};
